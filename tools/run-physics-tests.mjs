// Runs the physics tests with NO npm install and NO three.js, using a tiny stand-in for
// three's vector/quaternion maths (tools/three-shim.mjs).
// Usage (needs only Node):  node tools/run-physics-tests.mjs            -> src/test.mjs
//                           node tools/run-physics-tests.mjs steer      -> tools/steer-test.mjs
// It works on a temporary copy, so nothing in src/ is touched. Tests that need real three.js
// (test2.mjs, test3.mjs) are not supported here.
import fs from 'node:fs'; import os from 'node:os'; import path from 'node:path'; import { spawnSync } from 'node:child_process';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'phys-'));
fs.copyFileSync(path.join(root, 'tools/three-shim.mjs'), path.join(tmp, 'three-shim.mjs'));
fs.copyFileSync(path.join(root, 'src/cars.js'), path.join(tmp, 'cars.js'));
fs.writeFileSync(path.join(tmp, 'vehicle.js'), fs.readFileSync(path.join(root, 'src/vehicle.js'), 'utf8').replace("from 'three'", "from './three-shim.mjs'"));
const which = process.argv[2] === 'steer' ? 'steer' : 'main';
let script;
if (which === 'main') { fs.copyFileSync(path.join(root, 'src/test.mjs'), path.join(tmp, 'test.mjs')); script = 'test.mjs'; }
else { fs.mkdirSync(path.join(tmp, 'cur')); for (const f of ['vehicle.js', 'cars.js', 'three-shim.mjs']) fs.copyFileSync(path.join(tmp, f), path.join(tmp, 'cur', f));
  fs.copyFileSync(path.join(root, 'tools/steer-test.mjs'), path.join(tmp, 'steer-test.mjs')); script = 'steer-test.mjs'; }
const r = spawnSync(process.execPath, [script, 'cur'], { cwd: tmp, stdio: 'inherit' });
fs.rmSync(tmp, { recursive: true, force: true }); process.exit(r.status ?? 1);
