// Car data; the Vehicle class reads everything from here.
// GT40 is the base tuning set (drivetrain, tyres, suspension; the physics tests use it as is). F1GTR, at the bottom, is the car the game drives: the same tuning in the McLaren F1 GTR's own size.
// Body axes (model space): +x right, +y up, +z backward (nose is -z). Units: SI.

export const GT40 = {
  name: 'Ford GT40',
  mass: 1100,
  cgBack: 0.194,          // CG sits this far behind the axle mid-point
  cgHeight: 0.5,
  inertia: { pitch: 1900, yaw: 1700, roll: 600 },   // kg m^2 about right / up / forward axes
  angDamp: 60,            // N m s/rad, small aerodynamic angular damping

  engine: {
    idle: 1000, redline: 7000, max: 7400,
    peakTorque: 850, peakRpm: 4600,   // 850 Nm: tuned so 0-100 km/h takes 2.7 s
    brake: 110,           // engine-braking torque at redline (Nm)
    launch: 1500,         // rpm the clutch lets the engine rev to when launching
    clutch: { lo: 1800, hi: 3000, max: 1400, ramp: 0.1 },   // launch clutch: grips harder so the car can use all its traction off the line
    inertia: 0.17,        // kg m^2, reflected into the driven wheels while the clutch is locked
    torque(rpm) {
      const x = (rpm - 1000) / 5800;
      return this.peakTorque * Math.max(0.2, 1 - 0.9 * (x - 0.62) ** 2);
    },
  },
  gears: [3.5, 2.2, 1.55, 1.15, 0.92], reverse: 2.7, final: 3.2, eff: 0.88,
  shiftUp: 6700, shiftDown: 2700, shiftTime: 0.08, downshiftTime: 0.1,   // quick dual-clutch style shifts
  drive: { front: 0.3 },   // share of drive torque sent to the front axle: 0 = RWD, 1 = FWD, 0.3 = rear-biased AWD (needed to put 2.7 s worth of power on the road)
  diff: {
    front: { type: 'open' },
    rear: { type: 'lsd', stiffness: 400, preload: 80, power: 0.3 },   // Nm
  },

  steer: { lock: 0.5, vref: 32 },   // rad at standstill, speed (m/s) at which lock is quartered
  brakes: { g: 1.5, front: 0.6, handbrake: 3200, hold: 1500 },
  wheelInertia: 1.3,

  tyres: {
    front: { mu: 1.25, kappa0: 0.12, alpha0: 0.15, C: 1.4, loadSens: 0.10, crr: 0.015, v0: 1.5, relax: 0.3 },
    rear:  { mu: 1.22, kappa0: 0.12, alpha0: 0.15, C: 1.4, loadSens: 0.10, crr: 0.015, v0: 1.5, relax: 0.3 },
  },
  // ride frequency (Hz), damping ratio for bump / rebound, anti-roll bar rate (N/m of left-right compression difference)
  susp: {
    front: { hz: 1.7, zb: 0.35, zr: 0.6, arb: 12000 },
    rear:  { hz: 1.9, zb: 0.35, zr: 0.6, arb: 8000 },
    bump: 0.07, bumpRate: 120000, droop: 0.12,
  },
  aero: { drag: 0.45, side: 0.6, vert: 0.8, downforce: 0.25, frontShare: 0.45 },

  // collision hull: points in model space (the underside points are what scrape and bottom out)
  hull: [
    [-0.8, 0.12, -2.0], [0.8, 0.12, -2.0], [-0.8, 0.12, 0.0], [0.8, 0.12, 0.0], [-0.8, 0.12, 2.0], [0.8, 0.12, 2.0],
    [-0.75, 1.0, -0.4], [0.75, 1.0, -0.4], [-0.75, 1.0, 0.7], [0.75, 1.0, 0.7],
  ],
  // static obstacle circles: radius, and how far from the axle mid-point toward the nose / tail
  bumper: { radius: 0.92, spread: 1.146 },
};

// McLaren F1 GTR (the car in the game): the tuning above, with the F1 GTR model's own size.
// Measured on the model: wheelbase 2.71 m, body 2.4 m ahead of the axle mid-point to 1.95 m behind it, 1.9 m wide, 1.16 m tall, rear tyre radius 0.365 m (front 0.33).
// final is 3.2 (tuned with a 0.412 m wheel) scaled by 0.365 / 0.412, so the force at the road, and with it the 0-100 km/h time and top speed, stay the same.
export const F1GTR = {
  ...GT40,
  name: 'McLaren F1 GTR',
  final: 3.2 * 0.365 / 0.412,
  drive: { front: 0 },   // the real F1 GTR is rear-wheel drive (the base tuning sends 30 % to the front to reach a 2.7 s 0-100 km/h; as pure RWD it takes about 4.1 s)
  hull: [
    [-0.85, 0.12, -2.3], [0.85, 0.12, -2.3], [-0.85, 0.12, 0.0], [0.85, 0.12, 0.0], [-0.85, 0.12, 1.85], [0.85, 0.12, 1.85],
    [-0.7, 1.1, -0.7], [0.7, 1.1, -0.7], [-0.7, 1.1, 0.4], [0.7, 1.1, 0.4],
  ],
  bumper: { radius: 0.92, spread: 1.25 },
};
