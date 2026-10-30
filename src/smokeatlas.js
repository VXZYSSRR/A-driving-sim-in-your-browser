// Procedural smoke "flipbook": 4 sequences of 6 frames, each frame 128x128, packed 6 across x 4 down.
// R = smoke density (0..1), G = fine detail noise (used for wispy erosion), B = soft core, A = 255.
// Each sequence is one billowing puff slowly evolving (3-D noise, the 3rd axis is the frame number),
// so blending frame to frame while a puff ages looks like the smoke is really rolling and curling.
// Pure code, no assets, no DOM: it also runs in Node for testing.
export const ATLAS = { COLS: 6, ROWS: 4, CS: 128, NF: 6, NS: 4 };

export function makeAtlasData() {
  const { COLS, ROWS, CS, NF, NS } = ATLAS, W = COLS * CS, H = ROWS * CS, d = new Uint8Array(W * H * 4);
  const hash = (x, y, z, s) => { let h = (Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(z, 1274126177) + Math.imul(s, 362437)) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); h ^= h >>> 16; return (h >>> 0) / 4294967296; };
  const sm = t => t * t * (3 - 2 * t);
  const vn = (x, y, z, s) => {
    const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z), fx = sm(x - xi), fy = sm(y - yi), fz = sm(z - zi);
    const l = (a, b, t) => a + (b - a) * t;
    return l(l(l(hash(xi, yi, zi, s), hash(xi + 1, yi, zi, s), fx), l(hash(xi, yi + 1, zi, s), hash(xi + 1, yi + 1, zi, s), fx), fy),
             l(l(hash(xi, yi, zi + 1, s), hash(xi + 1, yi, zi + 1, s), fx), l(hash(xi, yi + 1, zi + 1, s), hash(xi + 1, yi + 1, zi + 1, s), fx), fy), fz);
  };
  const fbm = (x, y, z, s, o) => { let sum = 0, a = .5, n = 0; for (let i = 0; i < o; i++) { sum += a * vn(x, y, z, s + i * 7); n += a; a *= .5; x = x * 2.03 + 11.7; y = y * 2.03 + 3.1; z = z * 2.03 + 7.9 } return sum / n; };
  const ss = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  for (let q = 0; q < NS; q++) {
    const s = q * 97 + 13, ax = .8 + .5 * hash(q, 1, 2, 3), ay = 1.3 - .45 * hash(q, 4, 5, 6), ox = hash(q, 7, 8, 9) * 40, oy = hash(q, 10, 11, 12) * 40;
    for (let f = 0; f < NF; f++) {
      const z = f * .16 + q * 5.1, cx0 = (f % COLS) * CS, cy0 = (q + Math.floor(f / COLS)) * CS;   // one sequence per row
      for (let py = 0; py < CS; py++) for (let px = 0; px < CS; px++) {
        const x = (px + .5) / CS * 2 - 1, y = (py + .5) / CS * 2 - 1, r0 = Math.hypot(x, y), o = ((cy0 + py) * W + cx0 + px) * 4;
        if (r0 >= .995) { d[o] = d[o + 1] = d[o + 2] = 0; d[o + 3] = 255; continue; }
        // domain warp: the swirl
        const wx = (fbm(x * 1.3 + ox, y * 1.3 + oy, z, s, 3) - .5) * 1.7, wy = (fbm(x * 1.3 + oy + 9, y * 1.3 + ox + 5, z + 3, s + 3, 3) - .5) * 1.7;
        const qx = x + wx * .6, qy = y + wy * .6;
        const er = Math.hypot(qx * ax, qy * ay);
        const env = (1 - ss(.08, 1.2, er)) * (1 - ss(.8, .995, r0));
        const n1 = fbm(qx * 1.7 + ox, qy * 1.7 + oy, z, s + 21, 5);
        const n2 = fbm(qx * 4.1 + oy, qy * 4.1 + ox, z * 1.3, s + 33, 4);
        const rid = 1 - Math.abs(n2 * 2 - 1);
        let dens = env * (.18 + 1.05 * n1) + env * (1 - env) * .35 * rid;
        dens = ss(.22, .78, dens);
        const det = fbm(x * 3.3 + oy, y * 3.3 + ox, z * 1.7, s + 55, 5);
        d[o] = Math.round(Math.min(1, dens) * 255); d[o + 1] = Math.round(det * 255); d[o + 2] = Math.round(Math.min(1, dens * dens * 1.2) * 255); d[o + 3] = 255;
      }
    }
  }
  return { data: d, width: W, height: H };
}

// Tileable fbm noise (128x128, one channel in R) used for the wispy breaking-up of puffs.
export function makeDetailData() {
  const N = 128, d = new Uint8Array(N * N * 4);
  const hash = (x, y, s) => { let h = (Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(s, 1274126177)) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); h ^= h >>> 16; return (h >>> 0) / 4294967296; };
  const sm = t => t * t * (3 - 2 * t);
  const v = new Float32Array(N * N); let mn = 1e9, mx = -1e9;
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    let sum = 0, amp = .5;
    for (let o = 0; o < 5; o++) {
      const g = 4 << o, fx = x / N * g, fy = y / N * g, x0 = Math.floor(fx), y0 = Math.floor(fy), tx = sm(fx - x0), ty = sm(fy - y0);
      const a = hash(x0 % g, y0 % g, o), b = hash((x0 + 1) % g, y0 % g, o), c = hash(x0 % g, (y0 + 1) % g, o), e = hash((x0 + 1) % g, (y0 + 1) % g, o);
      sum += ((a * (1 - tx) + b * tx) * (1 - ty) + (c * (1 - tx) + e * tx) * ty) * amp; amp *= .5;
    }
    v[y * N + x] = sum; if (sum < mn) mn = sum; if (sum > mx) mx = sum;
  }
  for (let i = 0; i < N * N; i++) { const q = Math.round((v[i] - mn) / (mx - mn) * 255); d[i * 4] = d[i * 4 + 1] = d[i * 4 + 2] = q; d[i * 4 + 3] = 255; }
  return { data: d, width: N, height: N };
}
