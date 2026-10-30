// Vehicle physics: one 6-DOF rigid body, four independent suspension + tyre contacts.
// No DOM, no rendering. Runs at a fixed step (see FIXED_DT) and exposes interpolated render state.
//
// Conventions: world +y up. Body (model) space: +x right, +y up, +z backward, so the nose points -z.
// yaw = 0 faces world -z; yaw grows counter-clockwise seen from above (turning left).
import * as T from 'three';

const V = T.Vector3, Q = T.Quaternion;
const G = 9.81;
export const FIXED_DT = 1 / 240;
// Live handling sliders (see tuning.js, key I). 1 = the car's own data; every value scales one thing in step().
export const TUNE = { steerLock: 1, steerSpeed: 1, steerRate: 1, assist: 1, gripF: 1, gripR: 1, sharp: 1, relax: 1, downforce: 1, yawDamp: 1, roll: 1, drag: 1, power: 1, brakes: 1, handbrake: 1, rollRes: 1 };
const cl = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
const UP = new V(0, 1, 0);

// scratch (module level: the simulation is single threaded)
const _a = new V(), _b = new V(), _c = new V(), _d = new V(), _e = new V();
const _q = new Q(), _qi = new Q(), _wq = new Q(), _qd = new Q();
const _vb = new V(), _wb = new V(), _tb = new V(), _up = new V(), _fw = new V();
const _n0 = new V(), _n1 = new V(), _rA = new V(), _A = new V(), _rv = new V();
const _r = new V(), _nm = new V(), _X = new V();   // collision scratch, kept apart from the ones _impulse uses

export class Vehicle {
  constructor(d, layout, world) {
    this.d = d; this.world = world; this.m = d.mass;
    this.com = new V(0, d.cgHeight, d.cgBack);
    this.ii = new V(1 / d.inertia.pitch, 1 / d.inertia.yaw, 1 / d.inertia.roll);   // inverse inertia, body axes x / y / z

    const fr = layout.filter(w => w.front), rr = layout.filter(w => !w.front);
    const zf = fr.reduce((s, w) => s + w.z, 0) / fr.length, zr = rr.reduce((s, w) => s + w.z, 0) / rr.length;
    this.WB = zr - zf;
    this.a = this.com.z - zf;            // CG to front axle
    this.b = zr - this.com.z;            // CG to rear axle
    const frontShare = this.b / this.WB;
    this.track = layout.filter(w => w.left).length ? Math.abs(layout[0].x) * 2 : 1.5;

    const wheels = layout.map(w => {
      const sp = w.front ? d.susp.front : d.susp.rear;
      const N0 = this.m * G * (w.front ? frontShare : 1 - frontShare) / 2, mc = N0 / G;
      const k = mc * (2 * Math.PI * sp.hz) ** 2;
      return {
        front: w.front, left: w.left, R: w.y, rv: w.r,        // dynamic radius = hub height, visual radius
        a: new V(w.x - this.com.x, w.y - this.com.y, w.z - this.com.z),
        N0, k, cb: 2 * sp.zb * Math.sqrt(k * mc), cr: 2 * sp.zr * Math.sqrt(k * mc), arb: sp.arb,
        ty: w.front ? d.tyres.front : d.tyres.rear,
        s: 0, sdot: 0, w: 0, contact: false, N: 0, Fx: 0, Fy: 0, kappa: 0, vx: 0, vy: 0, Td: 0, Tb: 0, syF: 0,   // syF: lagged lateral slip (tyre relaxation)
        n: new V(), Pc: new V(), Ft: new V(), Lt: new V(),
      };
    });
    this.wheels = wheels;
    this.axF = wheels.filter(w => w.front); this.axR = wheels.filter(w => !w.front);

    this.p = new V(); this.q = new Q(); this.v = new V(); this.w = new V();
    this.pp = new V(); this.pq = new Q();                       // previous state, for render interpolation
    this.rp = new V(); this.rq = new Q(); this.origin = new V(); // interpolated render pose (origin = model origin)
    this.F = new V(); this.Tq = new V();
    // telemetry for HUD / audio / effects / camera
    this.t = {
      x: 0, z: 0, Y: 0, yaw: 0, u: 0, v: 0, r: 0, delta: 0, gear: 1, rpm: 1000, cut: 0, clutch: 0, sh: 0, rev: 0, brk: 0, hit: 0, grip: 1,
      slip: 0, lockF: 0, lockR: 0, axf: 0, ay: 0, airT: 0, land: 0, speed: 0,
    };
    this.reset(0, 0);
  }

  reset(x, z, yaw = 0) {
    const t = this.t;
    this.q.setFromAxisAngle(UP, yaw);
    this.p.copy(this.com).applyQuaternion(this.q).add(_a.set(x, this.world.height(x, z), z));
    this.v.set(0, 0, 0); this.w.set(0, 0, 0);
    for (const w of this.wheels) { w.s = 0; w.sdot = 0; w.w = 0; w.contact = false; w.N = w.N0; w.Fx = w.Fy = 0; w.syF = 0; }
    this.gear = 1; this.sh = 0; this.sIn = 0; this.airT = 0;
    // engine state: its own speed (rad/s), whether the clutch is locked, clutch re-engage ramp, rev-limiter cut, downshift blip
    this.we = this.d.engine.idle / 9.549; this.lock = false; this.ramp = 1; this.cut = 0; this.dsh = 0;
    Object.assign(t, { u: 0, v: 0, r: 0, delta: 0, gear: 1, rpm: this.d.engine.idle, cut: 0, clutch: 0, sh: 0, rev: 0, brk: 0, hit: 0, grip: 1, slip: 0, lockF: 0, lockR: 0, axf: 0, ay: 0, airT: 0, land: 0, speed: 0 });
    this.pp.copy(this.p); this.pq.copy(this.q); this.interp(1);
  }

  // inverse inertia tensor (world frame) times a world-frame vector
  _iinv(x, out) {
    _q.copy(this.q).invert();
    out.copy(x).applyQuaternion(_q);
    out.set(out.x * this.ii.x, out.y * this.ii.y, out.z * this.ii.z).applyQuaternion(this.q);
    return out;
  }

  // impulse at world offset r from the CoM, normal n, restitution e, friction mu. Returns the approach speed.
  _impulse(r, n, e, mu) {
    const m = this.m, vp = _a.copy(this.w).cross(r).add(this.v), vn = vp.dot(n);
    if (vn >= -1e-4) return 0;
    this._iinv(_b.crossVectors(r, n), _c);
    const k = 1 / m + _d.crossVectors(_c, r).dot(n), j = -(1 + e) * vn / k;
    this.v.addScaledVector(n, j / m);
    this._iinv(_a.crossVectors(r, _d.copy(n).multiplyScalar(j)), _c); this.w.add(_c);
    vp.copy(this.w).cross(r).add(this.v);
    _e.copy(vp).addScaledVector(n, -vp.dot(n));
    const vt = _e.length();
    if (vt > 1e-5) {
      _e.multiplyScalar(1 / vt);
      this._iinv(_b.crossVectors(r, _e), _c);
      const kt = 1 / m + _d.crossVectors(_c, r).dot(_e), jt = Math.min(vt / kt, mu * j);
      this.v.addScaledVector(_e, -jt / m);
      this._iinv(_a.crossVectors(r, _d.copy(_e).multiplyScalar(-jt)), _c); this.w.add(_c);
    }
    return -vn;
  }

  _groundN(x, z, out) {            // ground height + unit normal at (x,z)
    const H = this.world.height, e = 0.25, h = H(x, z);
    out.set(-(H(x + e, z) - h) / e, 1, -(H(x, z + e) - h) / e).normalize();
    return h;
  }

  step(dt, inp) {
    const d = this.d, t = this.t, W = this.wheels, m = this.m, p = this.p, q = this.q, v = this.v, w = this.w, F = this.F, Tq = this.Tq;
    this.pp.copy(p); this.pq.copy(q);
    q.normalize();
    _qi.copy(q).invert();
    _vb.copy(v).applyQuaternion(_qi);
    const up = _up.copy(UP).applyQuaternion(q), fw = _fw.set(0, 0, -1).applyQuaternion(q);
    const u = -_vb.z, vL = -_vb.x, tv = Math.hypot(u, vL);

    /* ---------- driver input ---------- */
    let thr = cl(inp.thr || 0, 0, 1), brk = cl(inp.brk || 0, 0, 1), rev = 0;
    const hb = inp.hb ? 1 : 0, assist = !!inp.assist, brkIn = brk;
    if (brk > 0 && !thr && u < 0.8) { rev = brk; brk = 0; }     // brake pedal at a standstill selects reverse
    if (thr > 0 && u < -0.8) { brk = thr; thr = 0; }              // throttle while rolling backwards brakes
    if (rev) this.gear = 1;
    const tg = inp.str || 0, rt = TUNE.steerRate * (tg === 0 ? 8 : (this.sIn * tg < 0 ? 7 : 11 / (1 + tv / 70)));
    this.sIn += cl(tg - this.sIn, -rt * dt, rt * dt);
    let delta = this.sIn * d.steer.lock * TUNE.steerLock / (1 + (tv / (d.steer.vref * TUNE.steerSpeed)) ** 2);
    if (assist && u > 6) delta += TUNE.assist * cl(0.6 * Math.atan2(vL, u) * (1 - 0.75 * Math.abs(this.sIn)), -0.3, 0.3);   // counter-steer assist
    t.delta = delta; t.rev = rev; t.brk = brk;

    /* ---------- wheel geometry: where does each wheel meet the ground? ---------- */
    const H = this.world.height, droop = d.susp.droop;
    let cnt = 0, sumN = 0;
    for (const wh of W) {
      _rA.copy(wh.a).applyQuaternion(q); _A.copy(_rA).add(p);
      const R = wh.R;
      wh.contact = false;
      const h0 = this._groundN(_A.x, _A.z, _n0), un0 = up.dot(_n0);
      if (un0 > 0.3) {
        const s1 = (R - (_A.y - h0) * _n0.y) / un0;
        const cx = _A.x + up.x * s1 - _n0.x * R, cz = _A.z + up.z * s1 - _n0.z * R;
        const h1 = this._groundN(cx, cz, _n1), un1 = up.dot(_n1);
        if (un1 > 0.3) {
          const d1 = (_A.x - cx) * _n1.x + (_A.y - h1) * _n1.y + (_A.z - cz) * _n1.z, sc = (R - d1) / un1;
          if (sc >= -droop) {
            wh.contact = true; wh.s = Math.min(sc, 0.3); wh.n.copy(_n1);
            _rv.copy(w).cross(_rA).add(v);
            wh.sdot = -_rv.dot(_n1) / un1;
            wh.Pc.copy(_A).addScaledVector(up, wh.s).addScaledVector(_n1, -R);
            wh.rA = wh.rA || new V(); wh.rA.copy(_rA);
          }
        }
      }
      if (!wh.contact) { wh.s += (-droop - wh.s) * Math.min(1, dt * 12); wh.sdot = 0; }
    }

    /* ---------- suspension forces (springs, dampers, bump stops, anti-roll bars) ---------- */
    for (const wh of W) {
      if (!wh.contact) { wh.N = 0; continue; }
      let N = wh.N0 + wh.k * wh.s + (wh.sdot > 0 ? wh.cb : wh.cr) * wh.sdot;
      if (wh.s > d.susp.bump) N += d.susp.bumpRate * (wh.s - d.susp.bump);
      wh.N = N;
    }
    for (const ax of [this.axF, this.axR]) {
      const L = ax.find(x => x.left), Rr = ax.find(x => !x.left);
      if (!L || !Rr) continue;
      const dN = L.arb * TUNE.roll * (L.s - Rr.s);
      if (L.contact) L.N += dN;
      if (Rr.contact) Rr.N -= dN;
    }
    for (const wh of W) { wh.N = Math.max(0, wh.N); if (wh.contact) { cnt++; sumN += wh.N; } }

    /* ---------- tyre kinematics (slip) ---------- */
    for (const wh of W) {
      if (!wh.contact) { wh.vx = wh.vy = wh.kappa = 0; continue; }
      const dl = wh.front ? delta : 0;
      _a.set(-Math.sin(dl), 0, -Math.cos(dl)).applyQuaternion(q);              // wheel heading
      wh.Ft.copy(_a).addScaledVector(wh.n, -_a.dot(wh.n)).normalize();
      wh.Lt.crossVectors(wh.n, wh.Ft);                                          // left of heading
      _b.copy(wh.Pc).sub(p);
      _rv.copy(w).cross(_b).add(v);
      wh.vx = _rv.dot(wh.Ft); wh.vy = _rv.dot(wh.Lt);
      const vden = Math.sqrt(wh.vx * wh.vx + wh.ty.v0 * wh.ty.v0);
      wh.kappa = (wh.w * wh.R - wh.vx) / vden;
    }

    /* ---------- drivetrain ----------
       The engine now has its own speed (this.we). An automatic clutch joins it to the wheels:
       - open while changing gear, then eased back in (so no jolt),
       - slips at low rpm (launch) and locks once the engine and wheels run at the same speed,
       - engine inertia, free revving, idle control, rev limiter (fuel cut with bounce) and a rev-matching blip on downshifts. */
    const E = d.engine, nG = d.gears.length, fb = d.drive.front;
    const CL = E.clutch || { lo: 1800, hi: 3000, max: 1000, ramp: 0.12 };
    const avgW = ax => ax.reduce((s, x) => s + x.w, 0) / ax.length;
    const wd = fb * avgW(this.axF) + (1 - fb) * avgW(this.axR);
    let gr = rev ? -d.reverse : d.gears[this.gear - 1];
    const rpmK = Math.abs(wd) * Math.abs(gr) * d.final * 9.549;
    // Gear changes follow the road speed, not a spinning wheel: rpmUp ignores wheelspin, rpmDn ignores a locked wheel.
    const Rg = W.reduce((s, x) => s + x.R, 0) / W.length, rpmG = Math.abs(u) / Rg * Math.abs(gr) * d.final * 9.549;
    const rpmUp = Math.min(rpmK, rpmG * 1.3 + 200), rpmDn = Math.max(rpmK, rpmG);
    if (this.sh > 0) { this.sh -= dt; if (this.sh <= 0) this.ramp = 0; }
    else if (!rev) {
      if (rpmUp > d.shiftUp && this.gear < nG) { this.gear++; this.sh = d.shiftTime; this.dsh = 0; this.lock = false; this.ramp = 0; }
      else if (rpmDn < d.shiftDown && this.gear > 1) { this.gear--; this.sh = d.downshiftTime; this.dsh = 1; this.lock = false; this.ramp = 0; }
    }
    if (this.sh <= 0 && this.ramp < 1) this.ramp = Math.min(1, this.ramp + dt / CL.ramp);
    gr = rev ? -d.reverse : d.gears[this.gear - 1];
    const wk = wd * gr * d.final;                          // driveline speed seen from the engine (rad/s, signed)
    const thrE = rev || thr;
    if (this.lock) { if (wk * 9.549 < E.idle * 0.7) this.lock = false; else this.we = wk; }   // wheels turning the wrong way (or too slowly) for this gear: let go instead of dragging the engine to 0
    const rpmE = this.we * 9.549;
    if (rpmE > E.redline) this.cut = 1; else if (rpmE < E.redline - 150) this.cut = 0;
    const pedal = (this.sh > 0 || hb || this.cut || (rev && u < -12)) ? 0 : thrE;
    const eb = (1 - pedal) * E.brake * cl(rpmE / E.redline, 0, 1.2);
    let Tnet = pedal * E.torque(rpmE) * TUNE.power - eb;
    Tnet += cl(E.brake * E.idle / E.redline + (E.idle - rpmE) * 0.6, 0, 80);            // idle governor
    if (this.sh > 0 && this.dsh) Tnet += cl(0.8 * (rpmK - rpmE), 0, 0.6 * E.torque(rpmE));   // downshift blip: match the engine to the new gear
    const sm = x => { x = cl(x, 0, 1); return x * x * (3 - 2 * x); };
    const Tcap = this.sh > 0 ? 0 : sm((rpmE - CL.lo) / (CL.hi - CL.lo)) * this.ramp * CL.max;
    if (this.lock && (Math.abs(Tnet) > Tcap * 1.15 || wk * 9.549 < E.idle * 0.7)) this.lock = false;
    let Tc;
    if (!this.lock) {
      const side = this.we - wk >= 0 ? 1 : -1;
      Tc = side * Tcap;
      const weN = this.we + dt / E.inertia * (Tnet - Tc);
      if (Tcap > 0 && wk > 0 && (weN - wk) * (this.we - wk) <= 0) { this.lock = true; this.we = wk; Tc = Tnet; }
      else this.we = cl(weN, 0, E.max / 9.549);
    } else Tc = Tnet;
    const Tw = Tc * gr * d.final * d.eff;
    const nDriven = fb > 0 && fb < 1 ? 4 : 2;
    const IeW = this.lock ? E.inertia * (gr * d.final) ** 2 / nDriven : 0;
    t.rpm = this.we * 9.549; t.gear = this.gear; t.sh = this.sh; t.cut = this.cut; t.clutch = Tcap / CL.max;

    for (const wh of W) { wh.Td = 0; }
    for (const [ax, share, df] of [[this.axF, fb, d.diff.front], [this.axR, 1 - fb, d.diff.rear]]) {
      if (share <= 0) continue;
      const Tax = share * Tw, L = ax.find(x => x.left), Rr = ax.find(x => !x.left);
      let lock = 0;
      if (df.type === 'lsd') { const lim = df.preload + df.power * Math.abs(Tax); lock = cl(df.stiffness * (L.w - Rr.w), -lim, lim); }
      L.Td = Tax / 2 - lock; Rr.Td = Tax / 2 + lock;
    }
    // brakes
    const Fbrk = d.brakes.g * TUNE.brakes * m * G, hold = (!thr && !brkIn && !rev && !hb && tv < 1.2) ? d.brakes.hold * (1 - tv / 1.2) : 0;
    for (const wh of W) {
      let Tb = brk * Fbrk * wh.R * (wh.front ? d.brakes.front : 1 - d.brakes.front) / 2 + hold;
      if (hb && !wh.front) Tb += d.brakes.handbrake * TUNE.handbrake;
      if (assist) {
        if (brk > 0 && wh.kappa < -0.15) Tb *= cl(1 - (-wh.kappa - 0.15) * 10, 0.15, 1);               // ABS
        if (wh.Td > 0 && wh.kappa > 0.22) wh.Td *= cl(1 - (wh.kappa - 0.22) * 6, 0.15, 1);              // traction control
      }
      wh.Tb = Tb;
    }

    /* ---------- tyre forces, wheel spin, body force accumulation ---------- */
    F.set(0, -m * G, 0); Tq.set(0, 0, 0);
    let axSum = 0, aySum = 0, spinR = 0, nR = 0, lkF = 0, lkR = 0;
    for (const wh of W) {
      const R = wh.R, ty = wh.ty;
      let Fx = 0, Fy = 0, Gs = 0;
      if (wh.contact) {
        const N = wh.N, load = cl(1 - ty.loadSens * (N / wh.N0 - 1), 0.6, 1.25);
        const mu = ty.mu * (wh.front ? TUNE.gripF : TUNE.gripR) * load * (this.world.grip ? this.world.grip(wh.Pc.x, wh.Pc.z) : 1), D = mu * N;
        const Bc = Math.tan(Math.PI / (2 * ty.C));
        const vden = Math.sqrt(wh.vx * wh.vx + ty.v0 * ty.v0);
        // Tyre relaxation: the sideways force builds up over a short distance of rolling (ty.relax metres)
        // instead of appearing instantly. 0 = off (the old behaviour). Longitudinal slip is left instant
        // so the wheel-spin solver below stays stable.
        const sxn = wh.kappa / ty.kappa0, synRaw = (wh.vy / vden) / (ty.alpha0 / TUNE.sharp), rlx = ty.relax * TUNE.relax;
        let syn = synRaw;
        if (rlx > 0) { wh.syF += (synRaw - wh.syF) * Math.min(1, dt * vden / rlx); syn = wh.syF; }
        const s = Math.hypot(sxn, syn);
        if (s > 1e-6) { const f = D * Math.sin(ty.C * Math.atan(Bc * s)); Fx = f * sxn / s; Fy = -f * syn / s; }
        const lim = 0.9 * (N / G) * Math.abs(wh.vy) / dt;                       // a tyre can stop sliding, not reverse it
        if (Math.abs(Fy) > lim) Fy = Math.sign(Fy) * lim;
        Gs = D * Bc * ty.C / ty.kappa0 * R / vden;                               // dFx / d(wheel speed)
        wh.Fx = Fx; wh.Fy = Fy;
        const Frr = ty.crr * TUNE.rollRes * N * Math.tanh(wh.vx / 0.5);
        _a.copy(wh.Ft).multiplyScalar(Fx - Frr).addScaledVector(wh.Lt, Fy);
        F.add(_a);
        Tq.add(_b.copy(wh.Pc).sub(p).cross(_a));
        axSum += _a.dot(fw); aySum += -_a.dot(_c.set(1, 0, 0).applyQuaternion(q));
        // suspension force acts on the body at the hub, along the body's up axis
        _a.copy(up).multiplyScalar(N);
        F.add(_a);
        Tq.add(_b.copy(wh.rA).addScaledVector(up, wh.s).cross(_a));
      } else { wh.Fx = wh.Fy = 0; wh.syF = 0; }
      // wheel spin (semi-implicit in slip so a stiff tyre cannot overshoot)
      const Iw = d.wheelInertia + ((wh.front ? fb > 0 : fb < 1) ? IeW : 0);
      const fI = 1 / (1 + dt * R * Gs / Iw);
      const wFree = wh.w + dt * (wh.Td - Fx * R) / Iw * fI - (wh.contact ? 0 : wh.w * 0.05 * dt);
      const dwB = dt * wh.Tb / Iw * fI;
      wh.w = Math.abs(wFree) <= dwB ? 0 : wFree - Math.sign(wFree) * dwB;
      if (!wh.front) { spinR += Math.max(0, wh.w * R - wh.vx); nR++; lkR += cl((-wh.kappa - 0.25) / 0.5, 0, 1); }
      else lkF += cl((-wh.kappa - 0.25) / 0.5, 0, 1);
    }

    /* ---------- aero ---------- */
    const A = d.aero;
    _a.set(-A.side * Math.abs(_vb.x) * _vb.x, -A.vert * Math.abs(_vb.y) * _vb.y, -A.drag * TUNE.drag * Math.abs(_vb.z) * _vb.z).applyQuaternion(q);
    F.add(_a);
    const df = A.downforce * TUNE.downforce * u * u;
    _a.copy(up).multiplyScalar(-df * A.frontShare); F.add(_a);
    Tq.add(_b.set(0, 0, -this.a).applyQuaternion(q).cross(_a));
    _a.copy(up).multiplyScalar(-df * (1 - A.frontShare)); F.add(_a);
    Tq.add(_b.set(0, 0, this.b).applyQuaternion(q).cross(_a));
    Tq.addScaledVector(w, -d.angDamp * TUNE.yawDamp);

    /* ---------- integrate velocities (gyroscopic term included) ---------- */
    v.addScaledVector(F, dt / m);
    const Ix = 1 / this.ii.x, Iy = 1 / this.ii.y, Iz = 1 / this.ii.z;
    _wb.copy(w).applyQuaternion(_qi); _tb.copy(Tq).applyQuaternion(_qi);
    _wb.x += (_tb.x - (Iy - Iz) * _wb.y * _wb.z) / Ix * dt;
    _wb.y += (_tb.y - (Iz - Ix) * _wb.z * _wb.x) / Iy * dt;
    _wb.z += (_tb.z - (Ix - Iy) * _wb.x * _wb.y) / Iz * dt;
    w.copy(_wb).applyQuaternion(q);

    /* ---------- collisions: hull vs terrain, bumper circles vs static boxes ---------- */
    let hit = 0;
    for (const hp of d.hull) {
      _r.set(hp[0] - this.com.x, hp[1] - this.com.y, hp[2] - this.com.z).applyQuaternion(q);
      _X.copy(p).add(_r);
      const g = H(_X.x, _X.z), pen = g - _X.y;
      if (pen > 0) {
        this._groundN(_X.x, _X.z, _nm);
        const vn = this._impulse(_r, _nm, 0, 0.6);
        p.addScaledVector(_nm, pen * 0.6);
        if (vn > 4) hit = Math.max(hit, vn);
      }
    }
    const bx = this.world.colliders;
    if (bx && bx.length) {
      const hl = Math.hypot(fw.x, fw.z) || 1, fx = fw.x / hl, fz = fw.z / hl, bp = d.bumper;
      for (const off of [d.cgBack - bp.spread, d.cgBack, d.cgBack + bp.spread]) {
        for (const B of bx) {
          const px = p.x + fx * off, pz = p.z + fz * off, nx = cl(px, B.x0, B.x1), nz = cl(pz, B.z0, B.z1);
          const dx = px - nx, dz = pz - nz, dd = Math.hypot(dx, dz);
          let n0, n1, pen;
          if (dd >= bp.radius) continue;
          if (dd < 1e-6) { const f = [px - B.x0, B.x1 - px, pz - B.z0, B.z1 - pz], k = f.indexOf(Math.min(...f)); n0 = [-1, 1, 0, 0][k]; n1 = [0, 0, -1, 1][k]; pen = f[k] + bp.radius; }
          else { n0 = dx / dd; n1 = dz / dd; pen = bp.radius - dd; }
          p.x += n0 * pen; p.z += n1 * pen;
          _r.set(nx - p.x, 0, nz - p.z);
          hit = Math.max(hit, this._impulse(_r, _nm.set(n0, 0, n1), 0.15, 0.4));
        }
      }
    }

    /* ---------- integrate pose ---------- */
    p.addScaledVector(v, dt);
    _wq.set(w.x, w.y, w.z, 0); _qd.multiplyQuaternions(_wq, q);
    q.set(q.x + 0.5 * dt * _qd.x, q.y + 0.5 * dt * _qd.y, q.z + 0.5 * dt * _qd.z, q.w + 0.5 * dt * _qd.w).normalize();

    /* ---------- telemetry ---------- */
    _vb.copy(v).applyQuaternion(_qi.copy(q).invert());
    t.u = -_vb.z; t.v = -_vb.x; t.r = w.dot(_a.set(0, 1, 0).applyQuaternion(q)); t.speed = v.length();
    t.hit = Math.max(t.hit, hit);
    t.grip = cl(sumN / (m * G), 0, 1.8);
    t.slip += (cl(nR ? spinR / nR : 0, 0, 12) - t.slip) * Math.min(1, dt * 15);
    t.lockF = brk > 0 ? lkF / Math.max(1, this.axF.length) : 0;
    t.lockR = hb ? 1 : (brk > 0 ? lkR / Math.max(1, nR) : 0);
    t.axf += (axSum / m - t.axf) * Math.min(1, dt * 10);
    t.ay = aySum / m;
    if (cnt === 0) this.airT += dt; else { if (this.airT > 0.25) t.land = Math.max(t.land, -v.y); this.airT = 0; }
    t.airT = this.airT;
  }

  // blend the last two physics states for rendering; a is 0..1 between them
  interp(a) {
    const t = this.t;
    this.rp.lerpVectors(this.pp, this.p, a);
    this.rq.copy(this.pq).slerp(this.q, a);
    this.origin.copy(this.com).negate().applyQuaternion(this.rq).add(this.rp);
    _a.set(0, 0, -1).applyQuaternion(this.rq);
    t.x = this.rp.x; t.z = this.rp.z; t.Y = this.origin.y; t.yaw = Math.atan2(-_a.x, -_a.z);
  }
}
