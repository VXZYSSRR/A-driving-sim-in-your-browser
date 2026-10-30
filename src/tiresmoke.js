// Tyre smoke, GTA-V style: instanced camera-facing sprites driven by real tyre slip.
//  - sprites are drawn from a procedural "flipbook" (smokeatlas.js) that animates over each puff's life,
//    broken up by a drifting wisp noise so puffs dissolve into strands instead of fading like cotton balls
//  - every puff is stretched along its own motion (cheap motion blur) and lit by the sun (self-shadowing
//    looked up from the same texture toward the sun, rim glow when the sun is behind the smoke)
//  - "soft particles": the scene is drawn into a render target with a depth texture, and each puff fades out
//    where it meets the road, the tyres or the car body, so there are no hard cut lines
//  - smoke is born at the tyre contact patch (and on the back of the tyre inside the arch), thrown back by the
//    spin, carried by the car, slowed by drag, sucked up into the car's wake at speed
// Classic script friendly: no fetch, no workers, no files.
import * as T from 'three';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ATLAS, makeAtlasData, makeDetailData } from './smokeatlas.js';

export const SMD = {          // defaults for the settings panel (J)
  amount: 1.72, opacity: 0.2, size: 1.23, wisp: 1.37, speed: 2, lift: 0, life: 1.41, white: 1.2, soft: 1.39, stretch: 0.21, swirl: 0,
};
const LABELS = { amount: 'Amount', opacity: 'Opacity', size: 'Puff size', wisp: 'Wispiness', speed: 'Throw speed', lift: 'Upward push', life: 'Lifetime', white: 'Whiteness', soft: 'Edge softness', stretch: 'Motion streak', swirl: 'Swirl' };
const RANGE = { amount: [0, 3], opacity: [.2, 2.5], size: [.5, 2], wisp: [0, 2.5], speed: [.3, 2], lift: [0, 2], life: [.4, 2.2], white: [.2, 1.2], soft: [.2, 3], stretch: [0, 2], swirl: [0, 3] };
const QN = ['Off', 'Low', 'Medium', 'High'];
const cl = (v, a, b) => v < a ? a : v > b ? b : v;
const rnd = (a, b) => a + Math.random() * (b - a);

const VS = `
attribute vec3 iPos; attribute vec3 iVel; attribute vec4 iP; attribute vec4 iT;
uniform vec3 uSunV; uniform float uStretch;
varying vec2 vUv; varying vec2 vUvR; varying vec2 vL; varying vec4 vT; varying vec4 vP;
varying float vViewZ; varying float vRad; varying vec3 vFragW; varying vec3 vCen;
void main(){
  vec4 cv=viewMatrix*vec4(iPos,1.);
  vec3 vv=(viewMatrix*vec4(iVel,0.)).xyz;
  float sp=length(vv.xy);
  float st=1.+clamp(sp*.06,0.,1.4)*uStretch;
  vec2 ax=sp>.05?vv.xy/sp:vec2(1.,0.);
  vec2 pr=vec2(-ax.y,ax.x);
  vec2 c=position.xy;
  float h=iP.x*.5;
  vec3 vp=cv.xyz; vp.xy+=ax*(c.x*h*st)+pr*(c.y*h);
  gl_Position=projectionMatrix*vec4(vp,1.);
  float cs=cos(iP.y),sn=sin(iP.y); mat2 rm=mat2(cs,-sn,sn,cs);
  // The quad is stretched along the puff's screen-space velocity (ax), but the TEXTURE must not be tied to that
  // axis: as drag slows a puff its screen velocity direction swings fast (and snaps to (1,0) below .05), which
  // used to spin the whole pattern once. So sample in a fixed screen-aligned frame: t = c expressed in screen axes
  // (the pattern is still streaked along ax, but never rotates with it).
  vec2 tc=ax*c.x+pr*c.y;
  vec2 sl=ax*(dot(uSunV.xy,ax)/st)+pr*dot(uSunV.xy,pr);
  vUv=c; vUvR=rm*tc;
  vL=rm*sl;
  vT=iT; vP=iP; vViewZ=-cv.z; vRad=iP.x*.3;
  vFragW=transpose(mat3(viewMatrix))*vp+cameraPosition; vCen=iPos;
}`;
const FS = `
uniform sampler2D tAtlas,tDetail,tDepth;
uniform vec2 uRes,uNF; uniform float uUseDepth,uSoft,uSwirl,uTime,uWisp,uErode,uWhite,uOpacity,uGround,uTailI;
uniform vec3 uSunV,uSunCol,uAmb,uTailW,uCarW,uGradeK;
varying vec2 vUv; varying vec2 vUvR; varying vec2 vL; varying vec4 vT; varying vec4 vP;
varying float vViewZ; varying float vRad; varying vec3 vFragW; varying vec3 vCen;
float linZ(float d){float z=d*2.-1.;return 2.*uNF.x*uNF.y/(uNF.y+uNF.x-z*(uNF.y-uNF.x));}
vec4 cell(float seq,float fr,vec2 uv){
  vec2 q=clamp(uv,-1.,1.)*.5+.5; q=q*(1.-1./64.)+.5/128.;
  return texture2D(tAtlas,(vec2(fr,seq)+q)/vec2(${ATLAS.COLS}.,${ATLAS.ROWS}.));
}
void main(){
  float rr=dot(vUv,vUv); if(rr>1.) discard;
  float t=vT.x, seq=floor(vP.w+.5);
  float fp=t*${ATLAS.NF - 1}.999, f0=floor(fp), ff=smoothstep(0.,1.,fract(fp));
  vec4 tx=mix(cell(seq,f0,vUvR),cell(seq,min(f0+1.,${ATLAS.NF - 1}.),vUvR),ff);
  float dens=tx.r;
  vec2 du=vUvR*.9+vec2(vP.z*7.3,vP.z*3.1)+vec2(uTime*.05,-uTime*.035)*uSwirl+t*.35;
  float dn=texture2D(tDetail,du).r*.65+texture2D(tDetail,du*2.3+.37).r*.35;
  float erode=uErode*(.025+.72*pow(t,1.45));
  float d=smoothstep(0.,.5,dens+(dn-.5)*.85*uWisp-erode);
  vec2 lo=vL*.2;
  float dl=(cell(seq,f0,vUvR+lo).r+cell(seq,f0,vUvR+lo*2.2).r)*.5;
  float lit=1.-clamp(dl*1.25-dens*.15,0.,1.)*.78;
  float fw=pow(clamp(-uSunV.z,0.,1.),2.5);
  float rim=fw*(1.-dens)*.9;
  vec3 col=vec3(.93,.94,.97)*(uAmb+uSunCol*(lit*(.8+.2*fw)+rim));
  col=mix(col*.62,col,uWhite);
  // colour: near-neutral grey with cool shadows (the warm sun used to tint it tan), pre-corrected for the film grade's warm highlights
  float lm=dot(col,vec3(.2126,.7152,.0722));
  col=mix(vec3(lm),col,.5);
  col*=mix(vec3(.93,.98,1.07),vec3(1.),smoothstep(.1,.6,lm));
  col*=mix(vec3(1.),uGradeK,smoothstep(.12,.7,lm));
  col*=mix(vec3(1.),vec3(.84,.68,.5),vT.w);   // dust (grass / dirt) is brown
  vec3 dtl=vCen-uTailW; col+=vec3(.9,.07,.03)*exp(-dot(dtl,dtl)/2.2)*uTailI*d;
  col=min(col,vec3(1.15));
  float a=d*vT.z*uOpacity*smoothstep(0.,.045,t)*(1.-smoothstep(.58,1.,t))*(1.-smoothstep(.6,1.,rr));
  a*=smoothstep(.6,3.2,vViewZ-vRad);
  // keep the car readable: smoke that sits between the camera and the car, over its silhouette, is thinned, and everything very near the body is capped
  vec3 rc=uCarW-cameraPosition; float rl=length(rc); vec3 rd=rc/max(rl,.001);
  vec3 fq=vFragW-cameraPosition; float pj=dot(fq,rd); float pp=length(fq-rd*pj);
  a*=1.-.6*smoothstep(1.,3.,rl-pj)*(1.-smoothstep(1.1,2.9,pp));
  a*=1.-.25*(1.-smoothstep(1.3,3.2,length(vCen-uCarW)));
  a*=1.-.3*vT.w;
  float soft;
  if(uUseDepth>.5){
    float sz=linZ(texture2D(tDepth,gl_FragCoord.xy/uRes).x);
    float front=vViewZ-vRad*sqrt(max(0.,1.-rr));
    soft=clamp((sz-front)/max(.25,vRad*uSoft),0.,1.);
  } else soft=clamp((vFragW.y-uGround)/max(.2,vRad*.8*uSoft)+.05,0.,1.);
  a*=soft*soft*(3.-2.*soft);
  if(a<.002) discard;
  gl_FragColor=vec4(col,a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

export class TireSmoke {
  constructor(R, cam, N = 2600) {
    this.R = R; this.cam = cam; this.N = N; this.q = 1; this.cap = [0, 900, 1700, N]; this.S = { ...SMD };
    this.time = 0; this.alive = 0; this.head = 0; this.softOK = !!(R.extensions.has('EXT_color_buffer_float') || R.extensions.has('EXT_color_buffer_half_float'));
    this.softOn = false; this.rt = null; this.out = new OutputPass(); this.out.renderToScreen = true;
    const f = n => new Float32Array(N * n);
    this.px = f(1); this.py = f(1); this.pz = f(1); this.vx = f(1); this.vy = f(1); this.vz = f(1);
    this.age = f(1); this.life = f(1); this.s0 = f(1); this.s1 = f(1); this.rot = f(1); this.spn = f(1); this.seed = f(1); this.seq = f(1); this.pk = f(1); this.dirt = f(1);
    this.aPos = f(3); this.aVel = f(3); this.aP = f(4); this.aT = f(4); this.keys = new Float64Array(N);
    this.prev = [null, null, null, null];
    const g = new T.InstancedBufferGeometry();
    g.setAttribute('position', new T.BufferAttribute(new Float32Array([-1, -1, 0, 1, -1, 0, -1, 1, 0, 1, 1, 0]), 3));
    g.setIndex([0, 1, 2, 2, 1, 3]);
    const dyn = (a, n) => new T.InstancedBufferAttribute(a, n).setUsage(T.DynamicDrawUsage);
    g.setAttribute('iPos', dyn(this.aPos, 3)); g.setAttribute('iVel', dyn(this.aVel, 3)); g.setAttribute('iP', dyn(this.aP, 4)); g.setAttribute('iT', dyn(this.aT, 4));
    g.instanceCount = 0; this.geo = g;
    const at = makeAtlasData(), dt = makeDetailData();
    const atlas = new T.DataTexture(at.data, at.width, at.height, T.RGBAFormat); atlas.generateMipmaps = true; atlas.minFilter = T.LinearMipmapLinearFilter; atlas.magFilter = T.LinearFilter; atlas.wrapS = atlas.wrapT = T.ClampToEdgeWrapping; atlas.needsUpdate = true;
    const det = new T.DataTexture(dt.data, dt.width, dt.height, T.RGBAFormat); det.generateMipmaps = true; det.minFilter = T.LinearMipmapLinearFilter; det.magFilter = T.LinearFilter; det.wrapS = det.wrapT = T.RepeatWrapping; det.needsUpdate = true;
    const dummy = new T.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1, T.RGBAFormat); dummy.needsUpdate = true;
    this.U = {
      tAtlas: { value: atlas }, tDetail: { value: det }, tDepth: { value: dummy }, uRes: { value: new T.Vector2(1, 1) }, uNF: { value: new T.Vector2(cam.near, cam.far) },
      uUseDepth: { value: 0 }, uSoft: { value: 1 }, uSwirl: { value: 1 }, uTime: { value: 0 }, uWisp: { value: 1 }, uErode: { value: 1 }, uWhite: { value: .85 }, uOpacity: { value: 1 }, uGround: { value: 0 }, uTailI: { value: 0 },
      uSunV: { value: new T.Vector3(0, 1, 0) }, uSunCol: { value: new T.Vector3(.85, .8, .68) }, uAmb: { value: new T.Vector3(.32, .37, .45) }, uTailW: { value: new T.Vector3(0, -50, 0) }, uStretch: { value: .6 }, uCarW: { value: new T.Vector3(0, -50, 0) }, uGradeK: { value: new T.Vector3(1, 1, 1) },
    };
    this.mat = new T.ShaderMaterial({ uniforms: this.U, vertexShader: VS, fragmentShader: FS, transparent: true, depthWrite: false, depthTest: true });
    this.mesh = new T.Mesh(g, this.mat); this.mesh.frustumCulled = false; this.mesh.renderOrder = 10;
    this.own = new T.Scene(); this.own.add(this.mesh);
    this._f = new T.Vector3(); this._v = new T.Vector2(); this._sv = new T.Vector3(); this.panelEl = null;
  }

  setQuality(q) { this.q = ((q % 4) + 4) % 4; if (this.q === 0) this.alive = this.geo.instanceCount = 0; for (let i = 0; i < this.N; i++) if (i >= this.cap[this.q]) this.life[i] = 0; this.head = 0; }
  cycleQuality() { this.setQuality(this.q + 1); return this.q; }
  info() { return 'Smoke ' + QN[this.q] + ' · ' + this.alive + ' puffs · ' + (this.softOn ? 'soft depth' : 'basic fade'); }

  // ---- emission: called once per wheel per frame ----
  // d: s (0..1 smoke strength), px,py,pz (contact patch), hx,hy,hz (hub), fx,fz (wheel heading), vx,vz (patch velocity over ground), spin (tyre surface speed minus ground speed, m/s), R (tyre radius), front
  emit(i, d, dt) {
    const pv = this.prev[i], q = this.q; this.prev[i] = { x: d.px, y: d.py, z: d.pz };
    if (q === 0 || d.s < .02 || dt <= 0) return;
    let dx = 0, dz = 0, dist = 0;
    if (pv) { dx = d.px - pv.x; dz = d.pz - pv.z; dist = Math.hypot(dx, dz); if (dist > 6) { dx = dz = dist = 0 } }
    const S = this.S, s = d.s, qm = [0, .45, .75, 1][q];
    const dirt = d.dirt || 0, spd = Math.hypot(d.vx, d.vz), sk = cl((spd - 8) / 20, 0, 1);   // dirt: 0 asphalt .. 1 grass; sk: 0 standing .. 1 fast
    // High-rate overlapping emission is intentional: the goal is a continuous smoke ribbon, not separated puffs.
    // Distance-based emission keeps the trail dense even when the car is moving quickly between frames.
    const n0 = (92 * Math.pow(s, 1.12) * dt + dist * (4.4 + 6.2 * sk) * s) * S.amount * qm * (1 - .62 * dirt), nn = Math.min(150, Math.floor(n0) + (Math.random() < n0 - Math.floor(n0) ? 1 : 0));
    const spinT = Math.max(0, d.spin), thr = Math.min(9, spinT * .3) * S.speed, bk = Math.min(9, spinT * .3) * .85;   // thr = slider-driven spray, bk = backward stream that does not depend on the slider
    for (let k = 0; k < nn; k++) {
      const u = Math.random(), r0 = Math.random(), arch = r0 < .34, ring = !arch && r0 < .72;
      let x = d.px - dx * (1 - u), y = d.py - 0, z = d.pz - dz * (1 - u), vx, vy, vz;
      const lx = -d.fz, lz = d.fx;   // wheel's left in the ground plane
      const sj = rnd(-.5, .5);
      if (arch) {   // born inside the wheel arch (anywhere round the top of the tyre), rides with the car, then slows and spills out round the tyre; the arch occluders hide whatever is still inside
        const th = rnd(-.42, Math.PI + .42), rr = d.R * rnd(.72, 1.18), ca = Math.cos(th), sa = Math.sin(th), ro = rnd(.12, .48);
        // Keep the source just outside the tyre's sidewall so depth testing does not hide the arch cloud inside the body.
        const sideOut = rnd(.22, .48);
        x = d.hx - d.fx * ca * rr + lx * (sideOut + rnd(-.10, .10)); z = d.hz - d.fz * ca * rr + lz * (sideOut + rnd(-.10, .10)); y = d.hy + sa * rr;
        // Carry fresh smoke with the wheel briefly; then its own drag/turbulence lets it roll up and spill out.
        vx = d.vx * .96 * (1 - .25 * sk) - d.fx * ca * ro + lx * rnd(-.18, .18); vz = d.vz * .96 * (1 - .25 * sk) - d.fz * ca * ro + lz * rnd(-.18, .18); vy = sa * ro + rnd(.12, .42) * (.5 + .5 * S.lift);
      } else if (ring) {   // born on the back of the tyre inside the arch, carried round with it
        const th = rnd(.05, 2.25), R = d.R * rnd(.92, 1.08), ct = Math.max(.12, Math.cos(th));   // up to 1.9 rad: some puffs start high on the back of the tyre, already inside the arch
        x = d.hx - d.fx * Math.sin(th) * R + lx * (sj * .25 + rnd(.12, .32)); z = d.hz - d.fz * Math.sin(th) * R + lz * (sj * .25 + rnd(.12, .32)); y = d.hy - Math.cos(th) * R;
        const sp0 = Math.min(10, (spinT * .5 + Math.abs(d.spin) * .15 + 1.5)), sp = sp0 * S.speed, spB = sp0 * .8, spU = sp0 * S.lift;   // sp = backward throw (Throw speed slider), spU = upward push (Upward push slider)
        vx = d.vx * .3 * (1 - .5 * sk) + (-d.fx * ct) * (sp * .2 + spB * .4); vz = d.vz * .3 * (1 - .5 * sk) + (-d.fz * ct) * (sp * .2 + spB * .4); vy = Math.sin(th) * spU * .6 + rnd(.1, .6);
      } else {
        x += lx * sj * .3 - d.fx * rnd(0, .25); z += lz * sj * .3 - d.fz * rnd(0, .25); y += rnd(.03, .16);
        const t2 = (thr * .3 + bk) * rnd(.55, 1.25), side = rnd(-.7, .7);
        const cf = .45 * (1 - .7 * sk);   // at speed most of the smoke is left standing in the air behind the car (a trail), not carried along with it
        vx = d.vx * cf - d.fx * t2 + lx * side; vz = d.vz * cf - d.fz * t2 + lz * side; vy = rnd(.15, .7) * (.5 + .5 * S.lift) * (1 - .55 * sk) + spinT * .01;
      }
      const big = rnd(.82, 1.32) * S.size * (.7 + .3 * s) * (1 - .22 * sk);
      this.spawn(x, y, z, vx, vy, vz, rnd(.62, .98) * S.size * (arch ? .82 : ring ? .92 : 1), rnd(2.2, 3.55) * big, (1 - u) * dt, rnd(1.8, 3.15) * S.life * (.62 + .38 * s), rnd(.24, .4) * (.38 + .62 * s * s + .25 * Math.min(1, s * 2)), (Math.random() * ATLAS.NS) | 0, dirt);
    }
  }
  spawn(x, y, z, vx, vy, vz, s0, s1, age0, life, pk, seq, dirt) {
    const i = this.head; this.head = (this.head + 1) % this.cap[this.q];
    this.px[i] = x; this.py[i] = y; this.pz[i] = z; this.vx[i] = vx; this.vy[i] = vy; this.vz[i] = vz; this.s0[i] = s0; this.s1[i] = s1; this.age[i] = age0; this.life[i] = life;
    // the puff's own spin follows the Swirl slider (0 = no twirl)
    this.rot[i] = Math.random() * 6.2832; this.spn[i] = rnd(-.35, .35) * cl(this.S.swirl / .5, 0, 1); this.seed[i] = Math.random(); this.seq[i] = seq; this.pk[i] = pk; this.dirt[i] = dirt || 0;
  }

  // E: cam-independent world info: cx,cz (car), fx,fz (car forward, horizontal), vx,vz (car velocity), rear (half length), ground (road height), day 0..1, sun (Vector3 toward sun), tail (Vector3), tailI
  update(dt, E) {
    const S = this.S, U = this.U, cam = this.cam, t = this.time += dt; if (this.q === 0) { this.geo.instanceCount = 0; this.alive = 0; return }
    U.uTime.value = t; U.uWisp.value = S.wisp; U.uWhite.value = S.white; U.uOpacity.value = S.opacity; U.uSoft.value = S.soft; U.uSwirl.value = cl(S.swirl / .5, 0, 1); U.uStretch.value = S.stretch; U.uGround.value = E.ground;
    const dayK = E.day; U.uSunCol.value.set(.84, .83, .8).multiplyScalar(dayK); U.uCarW.value.set(E.cx, E.ground + .8, E.cz); U.uAmb.value.set(.32, .37, .45).multiplyScalar(.14 + .86 * dayK);
    U.uTailW.value.copy(E.tail); U.uTailI.value = E.tailI * (.05 + .95 * (1 - dayK));   // brake lights only really light smoke at night; in daylight they stay almost invisible (was turning daytime smoke pink) U.uNF.value.set(cam.near, cam.far);
    cam.updateMatrixWorld(true); cam.matrixWorldInverse.copy(cam.matrixWorld).invert(); this._sv.copy(E.sun).transformDirection(cam.matrixWorldInverse); U.uSunV.value.copy(this._sv); cam.getWorldDirection(this._f); const f = this._f, cx = cam.position.x, cy = cam.position.y, cz = cam.position.z;
    const dh = Math.exp(-1.6 * dt), dv = Math.exp(-1.4 * dt), cap = this.cap[this.q], K = S.swirl, gy = E.ground + .03, rx = E.fz, rz = -E.fx;
    const wk = cl(Math.hypot(E.vx, E.vz) / 24, 0, 1);
    let n = 0; const keys = this.keys;
    for (let i = 0; i < cap; i++) {
      const life = this.life[i]; if (life <= 0) continue;
      const age = this.age[i] + dt; if (age >= life) { this.life[i] = 0; continue }
      this.age[i] = age; const a = age / life, sd = this.seed[i];
      let vx = this.vx[i] * dh, vy = this.vy[i] * dv, vz = this.vz[i] * dh, x = this.px[i], y = this.py[i], z = this.pz[i];
      const ph = sd * 6.2832 + t * .85 + y * 1.1, kk = K * (.5 + a);
      vx += Math.cos(ph) * kk * dt * 1.3; vz += Math.sin(ph * 1.3 + 1.7) * kk * dt * 1.3; vy += (.2 * (1 - a * .6) + Math.sin(ph * .7 + sd * 9) * kk * .5) * dt;
      vx += .5 * a * dt; vz += .2 * a * dt;   // light breeze moves old smoke
      if (wk > .02) {   // the car's wake: smoke behind the tail gets pulled along with the car and lifted
        const ex = x - E.cx, ez = z - E.cz, dd = ex * E.fx + ez * E.fz, ll = ex * rx + ez * rz, bh = -dd - E.rear;
        if (bh > -.5 && bh < 5.5 && Math.abs(ll) < 1.7 && y < E.ground + 1.9) { const w = wk * (1 - cl(bh, 0, 5.5) / 5.5) * 3 * dt; vx += (E.vx * .6 - vx) * w; vz += (E.vz * .6 - vz) * w; vy += w * .2 }
      }
      x += vx * dt; y += vy * dt; z += vz * dt;
      if (y < gy) { y = gy; if (vy < 0) vy *= -.1 }
      if (y < gy + .35) { const fr = Math.exp(-1.6 * dt); vx *= fr; vz *= fr }
      this.vx[i] = vx; this.vy[i] = vy; this.vz[i] = vz; this.px[i] = x; this.py[i] = y; this.pz[i] = z; this.rot[i] += this.spn[i] * dt;
      const depth = (x - cx) * f.x + (y - cy) * f.y + (z - cz) * f.z;
      if (depth < -2) continue;   // behind the camera
      keys[n++] = Math.round((1400 - Math.min(1399, depth)) * 256) * 4096 + i;
    }
    const sk = keys.subarray(0, n).sort(); let m = 0; const tcv = cl(Math.hypot(E.vx, E.vz) / 24, 0, 1) * .5;   // at speed puffs are stretched along the car's travel so neighbours join into one trail
    const aPos = this.aPos, aVel = this.aVel, aP = this.aP, aT = this.aT;
    for (let j = 0; j < n; j++) {
      const key = sk[j], i = key - Math.floor(key / 4096) * 4096, a = this.age[i] / this.life[i];
      aPos[m * 3] = this.px[i]; aPos[m * 3 + 1] = this.py[i]; aPos[m * 3 + 2] = this.pz[i];
      const tk = tcv * (1 - a * .5); aVel[m * 3] = this.vx[i] + E.vx * tk; aVel[m * 3 + 1] = this.vy[i]; aVel[m * 3 + 2] = this.vz[i] + E.vz * tk;
      const size = this.s0[i] + (this.s1[i] - this.s0[i]) * (1 - Math.pow(1 - a, 2.2));
      aP[m * 4] = size; aP[m * 4 + 1] = this.rot[i]; aP[m * 4 + 2] = this.seed[i]; aP[m * 4 + 3] = this.seq[i];
      aT[m * 4] = a; aT[m * 4 + 1] = this.life[i]; aT[m * 4 + 2] = this.pk[i]; aT[m * 4 + 3] = this.dirt[i]; m++;
    }
    this.alive = m; this.geo.instanceCount = m;
    for (const nme of ['iPos', 'iVel', 'iP', 'iT']) this.geo.attributes[nme].needsUpdate = true;
  }

  // ---- drawing ----
  _ensureRT() {
    const R = this.R; R.getDrawingBufferSize(this._v); const w = this._v.x, h = this._v.y;
    if (this.rt && this.rt.width === w && this.rt.height === h) return true;
    try {
      if (this.rt) { this.rt.depthTexture && this.rt.depthTexture.dispose(); this.rt.dispose() }
      const rt = new T.WebGLRenderTarget(w, h, { type: T.HalfFloatType, samples: 4, depthTexture: new T.DepthTexture(w, h) });
      this.rt = rt; this.U.tDepth.value = rt.depthTexture; this.U.uRes.value.set(w, h); return true;
    } catch (e) { this.softOK = false; this.rt = null; return false }
  }
  useInScene(S, graded = true) { this.U.uGradeK.value.set(...(graded ? [.93, 1, 1.12] : [1, 1, 1])); this.mat.depthTest = true; this.U.uUseDepth.value = 0; this.softOn = false; if (this.mesh.parent !== S) S.add(this.mesh) }
  renderFrame(S) {   // whole frame, used when post-FX is off
    const R = this.R, cam = this.cam;
    if (this.q >= 2 && this.softOK && this._ensureRT()) {
      this.softOn = true; this.U.uGradeK.value.set(1, 1, 1); this.mat.depthTest = false; this.U.uUseDepth.value = 1; if (this.mesh.parent !== this.own) this.own.add(this.mesh);
      R.setRenderTarget(this.rt); R.render(S, cam); R.setRenderTarget(null);
      this.out.render(R, null, this.rt);
      const ac = R.autoClear; R.autoClear = false; R.render(this.own, cam); R.autoClear = ac;
    } else { this.useInScene(S, false); R.render(S, cam) }
  }

  // ---- settings panel (key J) ----
  panel() {
    if (this.panelEl) return this.panelEl;
    const el = document.createElement('div'); el.className = 'cg-panel'; el.style.cssText = 'position:fixed;left:22px;bottom:204px;z-index:30;display:none;width:260px;max-height:calc(100vh - 224px);overflow:auto;padding:14px 16px;font-size:12px;line-height:1.4';
    for (const ev of ['pointerdown', 'pointerup', 'wheel', 'keydown', 'keyup']) el.addEventListener(ev, e => { if (ev === 'keydown' || ev === 'keyup') { if (e.code === 'KeyJ') return; } e.stopPropagation() });
    const h = document.createElement('div'); h.className = 'cg-h'; h.style.fontSize = '11px'; h.innerHTML = 'Tyre smoke <span style="opacity:.6;letter-spacing:.04em;text-transform:none;font-weight:600">(J to hide, X = quality)</span>'; el.appendChild(h);
    const out = document.createElement('textarea'); out.readOnly = true; out.style.cssText = 'width:100%;height:46px;margin-top:6px;background:#0c0e10;color:#cfd3d8;border:0;border-radius:4px;font:11px ui-monospace,monospace;display:none';
    for (const k of Object.keys(SMD)) {
      const row = document.createElement('div'); row.style.cssText = 'display:flex;align-items:center;gap:6px;margin-top:4px';
      const lb = document.createElement('span'); lb.style.cssText = 'width:84px;opacity:.85'; lb.textContent = LABELS[k];
      const r = document.createElement('input'); r.type = 'range'; r.min = RANGE[k][0]; r.max = RANGE[k][1]; r.step = .01; r.value = this.S[k]; r.style.cssText = 'flex:1;min-width:0';
      const vv = document.createElement('span'); vv.style.cssText = 'width:30px;text-align:right;opacity:.7'; vv.textContent = (+r.value).toFixed(2);
      r.addEventListener('input', () => { this.S[k] = +r.value; vv.textContent = (+r.value).toFixed(2) }); r.addEventListener('change', () => r.blur());
      row.append(lb, r, vv); el.appendChild(row); r._k = k; r._v = vv;
    }
    const bt = document.createElement('div'); bt.style.cssText = 'display:flex;gap:6px;margin-top:8px';
    const mk = (t, fn) => { const b = document.createElement('button'); b.textContent = t; b.className = 'cg-btn'; b.style.cssText = 'flex:1;padding:7px 6px'; b.addEventListener('click', () => { fn(); b.blur() }); return b };
    bt.append(mk('Reset', () => { Object.assign(this.S, SMD); for (const r of el.querySelectorAll('input')) { r.value = this.S[r._k]; r._v.textContent = (+r.value).toFixed(2) } out.style.display = 'none' }),
      mk('Copy settings', () => { const s = JSON.stringify(this.S, (k, v) => typeof v === 'number' ? +v.toFixed(2) : v); out.value = s; out.style.display = 'block'; out.select(); try { navigator.clipboard.writeText(s) } catch (e) { } }));
    el.appendChild(bt); el.appendChild(out); document.body.appendChild(el); this.panelEl = el; return el;
  }
  togglePanel() { const el = this.panel(); el.style.display = el.style.display === 'none' ? 'block' : 'none' }
}
