// Volumetric-looking clouds: a field of cumulus clumps made of lit, camera-facing puffs (instanced quads; one draw call).
// Every puff has a real 3-D position, so parallax and overlap are real, and each is shaded as a sphere (sun side bright, shadowed underside, darker flat bases,
// silver edges when you look toward the sun). The field sits high up (flat cumulus bases at about 1 km) and is much wider than the camera's far plane:
// a puff farther than FAR from the camera is moved along the line of sight to FAR and shrunk by the same factor, which draws exactly the same picture
// but keeps it inside the depth range. The field wraps around the camera and drifts with a light wind, so it never ends.
import * as T from 'three';

const H = 18000;          // half-size of the wrapped field (m)
const FAR = 1000;        // puffs are drawn no farther than this (m); see above
const BASE = 950;       // height of the flat cloud bases above the ground (m)

function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

// tileable value-noise texture: R = broad lumps, G = finer detail
function noiseTexture(n = 128) {
  const r = rng(7), lat = (cells) => { const g = new Float32Array(cells * cells); for (let i = 0; i < g.length; i++) g[i] = r(); return g; };
  const smooth = t => t * t * (3 - 2 * t);
  const sample = (g, cells, x, y) => { const fx = x * cells, fy = y * cells, x0 = Math.floor(fx), y0 = Math.floor(fy), tx = smooth(fx - x0), ty = smooth(fy - y0);
    const a = g[(y0 % cells) * cells + (x0 % cells)], b = g[(y0 % cells) * cells + ((x0 + 1) % cells)], c = g[((y0 + 1) % cells) * cells + (x0 % cells)], d = g[((y0 + 1) % cells) * cells + ((x0 + 1) % cells)];
    return (a + (b - a) * tx) * (1 - ty) + (c + (d - c) * tx) * ty; };
  const octs = [[4, .5], [8, .3], [16, .2]], gr = octs.map(([c]) => lat(c)), gr2 = [[8, .45], [16, .35], [32, .2]].map(([c]) => lat(c));
  const data = new Uint8Array(n * n * 4);
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    let v = 0, w = 0; octs.forEach(([c, a], i) => { v += sample(gr[i], c, x / n, y / n) * a; w += a; });
    let v2 = 0, w2 = 0; [[8, .45], [16, .35], [32, .2]].forEach(([c, a], i) => { v2 += sample(gr2[i], c, x / n, y / n) * a; w2 += a; });
    const o = (y * n + x) * 4; data[o] = Math.round(255 * v / w); data[o + 1] = Math.round(255 * v2 / w2); data[o + 2] = 0; data[o + 3] = 255;
  }
  const t = new T.DataTexture(data, n, n, T.RGBAFormat); t.wrapS = t.wrapT = T.RepeatWrapping; t.magFilter = t.minFilter = T.LinearFilter; t.generateMipmaps = false; t.needsUpdate = true; return t;
}

// the cloud layout: clumps of puffs. Per puff: x, y, z (world), size, seed, shade (0 base .. 1 top), level (0 = always drawn, 1 = only at full quality)
function layout() {
  const r = rng(20261029), P = [];
  const clump = (cx, cz, base, rc, hc, count, sizeK) => {
    for (let i = 0; i < count; i++) {
      const a = r() * Math.PI * 2, rr = Math.sqrt(r()) * rc * .8, x = cx + Math.cos(a) * rr, z = cz + Math.sin(a) * rr;
      const dome = hc * Math.sqrt(Math.max(0, 1 - (rr / (rc * .95)) ** 2)), h = Math.pow(r(), .8) * dome, y = base + 40 + h;
      const size = (rc * (.32 + r() * .3) * (1 - .35 * (h / Math.max(hc, 1)))) * sizeK;
      P.push([x, y, z, size, r() * 50, Math.min(1, h / Math.max(hc, 1)), i < count * .5 ? 0 : 1]);
    }
  };
  for (let i = 0; i < 190; i++) {   // fair-weather cumulus
    const rc = 380 + r() * 520, base = BASE + (r() - .5) * 140;
    clump((r() * 2 - 1) * H, (r() * 2 - 1) * H, base, rc, rc * (.55 + r() * .35), 16 + Math.floor(r() * 12), 1);
  }
  for (let i = 0; i < 26; i++) {   // a few wide, flat, thin banks
    const rc = 1000 + r() * 900, base = BASE + 350 + r() * 250;
    clump((r() * 2 - 1) * H, (r() * 2 - 1) * H, base, rc, rc * .16, 14, .75);
  }
  return P;
}

const VS = /* glsl */`
attribute vec3 aPos; attribute vec4 aData;
uniform float uTime, uH, uFar, uQ; uniform vec2 uWind;
varying vec2 vUv; varying vec4 vD; varying float vFade, vDist;
void main(){
  vec2 rel=mod(aPos.xz+uWind*uTime-cameraPosition.xz+uH,2.*uH)-uH;
  vec3 P=vec3(rel.x,aPos.y-cameraPosition.y,rel.y);
  float D=length(P), k=min(1.,uFar/D);
  float on=step(aData.w+.5,uQ+.0);
  vFade=on*(1.-smoothstep(.72*uH,.97*uH,max(abs(rel.x),abs(rel.y))));
  vUv=position.xy; vD=aData; vDist=D;
  vec4 mv=viewMatrix*vec4(cameraPosition+P*k,1.);
  mv.xy+=position.xy*aData.x*k*on;
  gl_Position=projectionMatrix*mv;
}`;

const FS = /* glsl */`
uniform sampler2D tN; uniform vec3 uSun, uHaze; uniform float uNight, uOpacity;
varying vec2 vUv; varying vec4 vD; varying float vFade, vDist;
void main(){
  float r2=dot(vUv,vUv); if(r2>1.||vFade<.01) discard;
  float s=vD.y;
  float n1=texture2D(tN,vUv*.42+vec2(s*.071,s*.113)).r, n2=texture2D(tN,vUv*1.1+vec2(s*.19,s*.047)).g;
  float d=(1.-sqrt(r2))+(n1-.5)*.62+(n2-.5)*.34;       // distance to the (lumpy) edge: > 0 inside the puff
  float a=smoothstep(.0,.5,d)*vFade; if(a<.015) discard;
  vec3 nrm=normalize(vec3(vUv+(vec2(n1,n2)-.5)*.55,sqrt(max(1.-r2,.04))));
  vec3 sv=normalize(mat3(viewMatrix)*uSun);
  float l=dot(nrm,sv), lit=smoothstep(-.4,.8,l);
  vec3 col=mix(vec3(.62,.69,.82),vec3(1.,.97,.9),lit);
  col*=mix(.78,1.,vD.z);                                // flat, darker bases; bright tops
  col*=1.-.2*smoothstep(.25,1.,d)*(1.-lit);             // thick cores are shadowed from inside
  float toSun=max(dot(sv,vec3(0.,0.,-1.)),0.);
  col+=vec3(1.,.93,.8)*(1.-smoothstep(.0,.55,d))*pow(toSun,2.)*1.0;   // silver lining against the sun
  col=mix(col,uHaze,smoothstep(3000.,20000.,vDist)*.6);   // distance haze
  col*=mix(1.,.07,uNight)*mix(vec3(1.),vec3(.8,.95,1.5),uNight);
  gl_FragColor=vec4(col,a*uOpacity*mix(1.,.65,uNight));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

export function createClouds({ sunDir, haze = 0xb4c8dc }) {
  const P = layout(), N = P.length;
  const g = new T.InstancedBufferGeometry();
  g.setAttribute('position', new T.Float32BufferAttribute([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0], 3));
  g.setIndex([0, 1, 2, 0, 2, 3]);
  const aPos = new T.InstancedBufferAttribute(new Float32Array(N * 3), 3), aData = new T.InstancedBufferAttribute(new Float32Array(N * 4), 4);
  aPos.setUsage(T.DynamicDrawUsage); aData.setUsage(T.DynamicDrawUsage);
  g.setAttribute('aPos', aPos); g.setAttribute('aData', aData); g.instanceCount = N;
  const u = { uTime: { value: 0 }, uH: { value: H }, uFar: { value: FAR }, uQ: { value: 2 }, uWind: { value: new T.Vector2(14, 6) }, tN: { value: noiseTexture() },
    uSun: { value: sunDir.clone().normalize() }, uHaze: { value: new T.Color(haze) }, uNight: { value: 0 }, uOpacity: { value: .96 } };
  u.uHaze.value.convertSRGBToLinear();
  const m = new T.ShaderMaterial({ vertexShader: VS, fragmentShader: FS, uniforms: u, transparent: true, depthWrite: false, depthTest: true, side: T.DoubleSide, fog: false });
  const mesh = new T.Mesh(g, m); mesh.frustumCulled = false; mesh.renderOrder = -1;   // drawn before the glass and smoke, after the opaque world
  mesh.name = 'clouds';
  let level = 2, lastSort = -1e9, sx = 1e9, sz = 1e9;
  const idx = new Uint32Array(N), dist = new Float32Array(N);
  function sort(cx, cz, t) {   // far to near, by where each puff really is
    const wx = u.uWind.value.x * t, wz = u.uWind.value.y * t, W = 2 * H;
    for (let i = 0; i < N; i++) {
      const p = P[i], rx = ((p[0] + wx - cx + H) % W + W) % W - H, rz = ((p[2] + wz - cz + H) % W + W) % W - H, ry = p[1];
      dist[i] = rx * rx + rz * rz + ry * ry; idx[i] = i;
    }
    const order = Array.from(idx).sort((a, b) => dist[b] - dist[a]);
    for (let j = 0; j < N; j++) { const p = P[order[j]]; aPos.setXYZ(j, p[0], p[1], p[2]); aData.setXYZW(j, p[3], p[4], p[5], p[6]); }
    aPos.needsUpdate = aData.needsUpdate = true; lastSort = t; sx = cx; sz = cz;
  }
  sort(0, 0, 0);
  return {
    mesh,
    get level() { return level; },
    setLevel(l) { level = l; u.uQ.value = l; },   // 0 off, 1 light (half the puffs), 2 full
    update(t, camPos, night) {
      mesh.visible = level > 0 && !mesh.userData.hidden;
      if (!mesh.visible) return;
      u.uTime.value = t; u.uNight.value = night ? 1 : 0;
      if (t - lastSort > 1 || Math.abs(camPos.x - sx) + Math.abs(camPos.z - sz) > 80) sort(camPos.x, camPos.z, t);
    },
  };
}
