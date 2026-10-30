// In-game physics self-test. Runs the same checks as src/test.mjs on a SEPARATE car on a flat,
// empty world (your driven car is not touched). Spread over many frames so the game never freezes.
// Each result compares against the numbers measured on 2026-10-19 with the REAL GT40 wheel layout from the model
// (tyre relaxation 0.3 m, and the new engine/clutch model of the second 2026-10-19 session). Note: src/test.mjs uses a stand-in layout (bigger wheels), so its numbers differ a little (e.g. top speed 289 vs 271 km/h).
// "ok" = within the allowed range, "changed" = outside it (expected if you changed physics on purpose).
import { Vehicle, FIXED_DT } from './vehicle.js';

const kmh = v => v.t.speed * 3.6;
const bad = v => [v.p.x, v.p.y, v.p.z, v.q.x, v.v.x, v.w.x].some(x => !Number.isFinite(x));
const flat = { height: () => 0, colliders: [] };
const CHUNK = 600;   // physics steps per pause

function* run(veh, sec, inpf, cb) {
  const n = Math.round(sec / FIXED_DT);
  for (let i = 0; i < n; i++) {
    const t = i * FIXED_DT;
    veh.step(FIXED_DT, inpf(t, veh.t));
    if (cb) cb(t, veh);
    if (i % CHUNK === CHUNK - 1) yield;
  }
}

// one row: name, measured value text, expected text, status
const row = (name, val, exp, ok) => ({ name, val, exp, ok });
const within = (v, target, tol) => Math.abs(v - target) <= tol;

export function makeSelfTests(carData, layout) {
  const mk = (world = flat) => new Vehicle(carData, layout, world);
  const results = [];
  let status = 'idle', current = '', gen = null, total = 0, doneCount = 0;

  function* all() {
    const names = ['Standing still', 'Engine: idle and clutch', '0-100 km/h and top speed', 'Braking 100-0', 'Skidpad (full steering lock)', 'Handbrake turn', '1.5 m drop', 'Ramp jump'];
    total = names.length;
    // 1 standing still
    current = names[0];
    { const v = mk(), y0 = v.p.y; yield* run(v, 5, () => ({}));
      const dy = v.p.y - y0;
      results.push(row('Car rests quietly on its springs', 'moved ' + Math.abs(dy).toFixed(4) + ' m, speed ' + v.t.speed.toFixed(3) + ' m/s', 'moved 0.0000 m', Math.abs(dy) < 0.01 && v.t.speed < 0.02 && !bad(v))); doneCount++; yield; }
    // 1b engine: idle governor, revving against a slipping clutch at standstill
    current = names[1];
    { const v = mk(); yield* run(v, 3, () => ({})); const idle = v.t.rpm;
      yield* run(v, 2, () => ({ thr: 1, brk: 1, assist: true })); const held = v.t.rpm;
      results.push(row('Engine idles steadily', Math.round(idle) + ' rpm', '1000 rpm (+-60)', within(idle, 1000, 60) && !bad(v)));
      results.push(row('Engine revs against the slipping clutch (full throttle, brake held)', Math.round(held) + ' rpm', '2424 rpm (+-400)', within(held, 2424, 400))); doneCount++; yield; }
    // 2 acceleration
    current = names[2];
    { const v = mk(); let t100 = 0, t200 = 0, maxRpm = 0, cuts = 0, wasCut = 0;
      yield* run(v, 40, () => ({ thr: 1, assist: true }), (t, v) => { if (!t100 && kmh(v) >= 100) t100 = t; if (!t200 && kmh(v) >= 200) t200 = t; maxRpm = Math.max(maxRpm, v.t.rpm); if (v.t.cut && !wasCut) cuts++; wasCut = v.t.cut; });
      results.push(row('0-100 km/h', t100.toFixed(2) + ' s', '2.70 s (+-0.15)', within(t100, 2.70, 0.15) && !bad(v)));
      results.push(row('0-200 km/h', t200.toFixed(2) + ' s', '6.74 s (+-0.60)', within(t200, 6.74, 0.6)));
      results.push(row('Rev limiter: highest rpm (and times it cut the fuel)', Math.round(maxRpm) + ' rpm (' + cuts + ' cuts)', '7066 rpm max, at least 1 cut', maxRpm < 7150 && cuts >= 1));
      results.push(row('Top speed after 40 s', kmh(v).toFixed(0) + ' km/h', '352 km/h (+-8)', within(kmh(v), 352, 8))); doneCount++; yield; }
    // 3 braking
    current = names[3];
    { const v = mk(); let started = false, tb = 0, dist = 0, stopT = 0, p0 = null;
      yield* run(v, 30, () => started ? { brk: 1, assist: true } : { thr: 1, assist: true }, (t, v) => {
        if (!started && kmh(v) >= 100) { started = true; tb = t; p0 = v.p.clone(); }
        if (started && v.t.speed < 0.3 && !dist) { dist = v.p.distanceTo(p0); stopT = t - tb; } });
      results.push(row('Braking distance from 100 km/h', dist ? dist.toFixed(1) + ' m' : 'did not stop', '33.0 m (+-3)', dist > 0 && within(dist, 33.0, 3)));
      results.push(row('Braking time', stopT ? stopT.toFixed(2) + ' s' : '-', '2.43 s (+-0.25)', !!stopT && within(stopT, 2.43, 0.25))); doneCount++; yield; }
    // 4 skidpad
    current = names[4];
    { const v = mk(); let maxay = 0;
      yield* run(v, 25, (t, tt) => t < 8 ? { thr: tt.speed < 22 ? 1 : 0.15, assist: true } : { thr: v.t.speed < 22 ? 0.6 : 0.2, str: 1, assist: true },
        (t, v) => { if (t > 14) maxay = Math.max(maxay, Math.abs(v.t.ay) / 9.81); });
      results.push(row('Cornering grip (skidpad)', maxay.toFixed(2) + ' g', '1.01 g (+-0.06)', within(maxay, 1.01, 0.06) && !bad(v))); doneCount++; yield; }
    // 5 handbrake turn
    current = names[5];
    { const v = mk(); let yawMax = 0;
      yield* run(v, 12, (t) => t < 5 ? { thr: 1, assist: false } : t < 6.5 ? { hb: 1, str: 1, assist: false } : { thr: 0.3, assist: false }, (t, v) => { yawMax = Math.max(yawMax, Math.abs(v.t.r)); });
      results.push(row('Handbrake turn: peak spin rate', yawMax.toFixed(2) + ' rad/s', '2.67 rad/s (+-0.25)', within(yawMax, 2.67, 0.25) && !bad(v))); doneCount++; yield; }
    // 6 drop
    current = names[6];
    { const v = mk(); v.p.y += 1.5; v.pp.copy(v.p); yield* run(v, 5, () => ({}));
      results.push(row('Settles after a 1.5 m drop', 'rests at height ' + v.p.y.toFixed(3) + ' m', '0.500 m (+-0.02)', within(v.p.y, 0.5, 0.02) && v.t.speed < 0.05 && !bad(v))); doneCount++; yield; }
    // 7 ramp
    current = names[7];
    { const ramp = { height: (x, z) => { const d = -z; if (d < 20) return 0; if (d < 40) return (d - 20) * 0.2; return 0; }, colliders: [] };
      const v = mk(ramp); let maxAir = 0;
      yield* run(v, 14, (t, tt) => ({ thr: tt.speed < 40 ? 1 : 0.2, assist: true }), (t, v) => { maxAir = Math.max(maxAir, v.t.airT); });
      results.push(row('Ramp jump: time in the air', maxAir.toFixed(2) + ' s', '1.46 s (+-0.3)', within(maxAir, 1.46, 0.3) && !bad(v))); doneCount++; yield; }
    current = '';
  }

  return {
    get status() { return status; }, results, get current() { return current; }, get progress() { return total ? doneCount + '/' + total : '0/8'; },
    start() { results.length = 0; doneCount = 0; total = 8; status = 'running'; gen = all(); },
    // call once per frame; works for at most `ms` milliseconds
    tick(ms = 6) {
      if (status !== 'running') return;
      const t0 = performance.now();
      try { while (performance.now() - t0 < ms) { const r = gen.next(); if (r.done) { status = 'done'; break; } } }
      catch (e) { status = 'error'; results.push(row('Test crashed', String(e && e.message || e), '', false)); }
    },
  };
}
