// Handling settings panel (key I): sliders for the live TUNE multipliers in vehicle.js, with a Copy values button at the bottom.
import { TUNE } from './vehicle.js';

// key: [label, min, max, step, hint]
const GROUPS = [
  ['Steering', {
    steerLock: ['Steering lock', .5, 2.5, .01, 'how far the wheels turn'],
    steerSpeed: ['Lock kept at speed', .5, 5, .01, 'higher = still steers at speed'],
    steerRate: ['Steering speed', .5, 3, .01, 'how fast the wheel moves'],
    assist: ['Counter-steer assist', 0, 3, .01, 'only while T assists is on'],
  }],
  ['Grip', {
    gripF: ['Front grip', .5, 3, .01, 'more = turns in harder'],
    gripR: ['Rear grip', .5, 3, .01, 'more = stays planted'],
    sharp: ['Tyre sharpness', .5, 3, .01, 'grips at smaller slip angles'],
    relax: ['Turn-in lag', 0, 3, .01, '0 = instant tyre response'],
  }],
  ['Stability and aero', {
    downforce: ['Downforce', 0, 25, .1, 'pushes the car onto the road'],
    yawDamp: ['Spin damping', 0, 8, .05, 'resists the car rotating'],
    roll: ['Anti-roll stiffness', 0, 3, .01, 'body roll resistance'],
    drag: ['Air drag', 0, 3, .01, 'lower = higher top speed'],
  }],
  ['Power and brakes', {
    power: ['Engine power', .3, 2.5, .01, ''],
    brakes: ['Brake strength', .3, 2.5, .01, ''],
    handbrake: ['Handbrake', 0, 2.5, .01, 'rear lock-up strength'],
    rollRes: ['Rolling resistance', 0, 4, .01, ''],
  }],
];
const TIPS = {
  steerLock: 'How far the front wheels can turn. Higher = a tighter turning circle, especially at low speed. Too high and the car gets twitchy and can spin.',
  steerSpeed: 'Cars turn the wheels less as speed rises, to stay stable. Higher keeps more steering angle at speed, so you can still turn when going fast. Too high and it can snap into a slide.',
  steerRate: 'How quickly the wheels move to the angle you ask for when you press A / D. Higher = sharper, snappier. Lower = smoother and lazier.',
  assist: 'How hard the automatic counter-steer works to catch a slide (it steers into the skid for you). Only works while assists are on (T). 0 = off.',
  gripF: 'How well the front tyres grip. More = the car turns in harder. Too high compared with the rear and the back end swings out (oversteer).',
  gripR: 'How well the rear tyres grip. More = the back stays planted and resists sliding out. Less = easier to drift.',
  sharp: 'How quickly the tyres reach full grip once they are pointed off-line (slip angle). Higher = bites instantly and feels precise. Lower = needs more steering before it grips, feels vague.',
  relax: 'The short delay before a tyre builds up sideways grip after you turn (tyre relaxation). 0 = instant. Higher = a floaty, lagging turn-in.',
  downforce: 'Air pushing the car down onto the road. It grows with the square of your speed, so it does little when slow and a lot when fast. More = much more grip in fast corners.',
  yawDamp: 'Resistance to the car rotating around its vertical axis (yaw). Higher = harder to spin out, but the car is also slower to rotate into a corner.',
  roll: 'Anti-roll bar stiffness: how strongly the suspension resists the body leaning in corners. Higher = flatter and more responsive. Too stiff and an inside wheel can lose grip.',
  drag: 'Air resistance. Lower = higher top speed and less slowing down when you lift off the gas.',
  power: 'Engine power. 1.00 = stock. Higher = faster acceleration and more wheelspin.',
  brakes: 'Braking force. Higher = shorter stopping distance. Too high and the wheels lock up (ABS helps if assists are on).',
  handbrake: 'How hard the handbrake locks the rear wheels. Higher = easier handbrake turns and drifts.',
  rollRes: 'Rolling resistance: the constant drag from tyres rolling on the road. Higher = the car slows faster when you lift off.',
};
const FLAT = Object.assign({}, ...GROUPS.map(g => g[1]));
export const ORIGINAL = Object.fromEntries(Object.keys(FLAT).map(k => [k, 1]));
export const GRIPPY = { ...ORIGINAL, steerLock: 1.2, steerSpeed: 2, steerRate: 1.3, gripF: 1.35, gripR: 1.4, sharp: 1.4, relax: .6, downforce: 8, yawDamp: 2 };

export class TuningPanel {
  constructor() { this.el = null; this.rows = {}; this.apply(ORIGINAL); }
  apply(o) { Object.assign(TUNE, o); for (const k in this.rows) this.rows[k].set(TUNE[k]) }
  toggle() {
    const el = this.build(), show = el.style.display === 'none';
    el.style.display = show ? 'block' : 'none';
    if (show && document.pointerLockElement) document.exitPointerLock();
    if (!show) this.tipEl.style.display = 'none';
  }
  // our own tooltip (the browser's title tooltips do not show reliably over the game page)
  showTip(row, text) {
    const t = this.tipEl, pr = this.el.getBoundingClientRect(), rr = row.getBoundingClientRect();
    t.textContent = text; t.style.display = 'block'; t.style.right = (innerWidth - pr.left + 8) + 'px';
    t.style.top = Math.max(8, Math.min(innerHeight - t.offsetHeight - 8, rr.top + rr.height / 2 - t.offsetHeight / 2)) + 'px';
  }
  build() {
    if (this.el) return this.el;
    this.tipEl = document.createElement('div');
    this.tipEl.style.cssText = 'position:fixed;z-index:31;display:none;max-width:260px;padding:8px 10px;border-radius:6px;background:#1b2026;border:1px solid #3a424b;color:#e6e8eb;font:12px/1.45 system-ui,sans-serif;pointer-events:none;box-shadow:0 4px 14px rgba(0,0,0,.5)';
    document.body.appendChild(this.tipEl);
    const el = document.createElement('div');
    el.className = 'cg-panel'; el.style.cssText = 'position:fixed;right:20px;top:20px;bottom:20px;z-index:30;display:none;width:300px;overflow:auto;padding:14px 16px;font-size:12px;line-height:1.4';
    for (const ev of ['pointerdown', 'pointerup', 'wheel', 'keydown', 'keyup']) el.addEventListener(ev, e => { if ((ev === 'keydown' || ev === 'keyup') && e.code === 'KeyI') return; e.stopPropagation() });
    el.insertAdjacentHTML('beforeend', '<div class="cg-h" style="font-size:11px">Handling settings <span style="opacity:.6;letter-spacing:.04em;text-transform:none;font-weight:600">(I to hide)</span></div><div style="opacity:.6;margin-top:2px">1.00 = the car\'s original value. Hover a name or slider to see what it does.</div>');
    for (const [title, defs] of GROUPS) {
      const h = document.createElement('div'); h.textContent = title; h.style.cssText = 'margin-top:12px;font-weight:700;color:#e8a33d'; el.appendChild(h);
      for (const k in defs) {
        const [label, lo, hi, step, hint] = defs[k];
        const row = document.createElement('div'); row.style.cssText = 'display:flex;align-items:center;gap:6px;margin-top:5px'; 
        const lb = document.createElement('span'); lb.style.cssText = 'width:110px;opacity:.9'; lb.textContent = label;
        const r = document.createElement('input'); r.type = 'range'; r.min = lo; r.max = hi; r.step = step; r.style.cssText = 'flex:1;min-width:0';
        const vv = document.createElement('span'); vv.style.cssText = 'width:34px;text-align:right;opacity:.75'; row.addEventListener('pointerenter', () => this.showTip(row, TIPS[k])); row.addEventListener('pointerleave', () => { this.tipEl.style.display = 'none' }); lb.style.cursor = 'help'; lb.style.borderBottom = '1px dotted #667';
        const set = v => { r.value = v; vv.textContent = (+v).toFixed(2) };
        r.addEventListener('input', () => { TUNE[k] = +r.value; vv.textContent = (+r.value).toFixed(2) }); r.addEventListener('change', () => r.blur());
        this.rows[k] = { set }; set(TUNE[k]); row.append(lb, r, vv); el.appendChild(row);
      }
    }
    const out = document.createElement('textarea'); out.readOnly = true; out.style.cssText = 'width:100%;height:70px;margin-top:10px;background:#0c0e10;color:#cfd3d8;border:0;border-radius:4px;font:11px ui-monospace,monospace;display:none';
    const bt = document.createElement('div'); bt.style.cssText = 'display:flex;gap:6px;margin-top:12px;position:sticky;bottom:-14px;padding:10px 0 14px;background:linear-gradient(180deg,rgba(12,14,18,0),rgba(12,14,18,.97) 30%)';
    const mk = (t, fn) => { const b = document.createElement('button'); b.textContent = t; b.className = 'cg-btn'; b.style.cssText = 'flex:1;padding:8px 6px'; b.addEventListener('click', () => { fn(); b.blur() }); return b };
    bt.append(mk('Original', () => { this.apply(ORIGINAL); out.style.display = 'none' }), mk('Grippy', () => { this.apply(GRIPPY); out.style.display = 'none' }),
      mk('Copy values', () => { const s = JSON.stringify(TUNE, (k, v) => typeof v === 'number' ? +v.toFixed(2) : v); out.value = s; out.style.display = 'block'; out.select(); try { navigator.clipboard.writeText(s) } catch (e) { } }));
    el.append(out, bt); document.body.appendChild(el); this.el = el; return el;
  }
}
