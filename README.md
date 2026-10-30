<div align="center">

# Car Game

**A driving sandbox that runs in your browser, built to feel right before it looks right.**
No install. No server. Open one file and drive. Pre-release, and honest about it.

</div>

---

## Table of contents

* [What is Car Game?](#what-is-car-game)
* [Read this first: how rough it is](#read-this-first-how-rough-it-is)
* [Highlights](#highlights)
* [Quick start](#quick-start)
* [Controls](#controls)
* [How it works](#how-it-works)
* [Features in detail](#features-in-detail)
* [What is it for?](#what-is-it-for)
* [Where it's headed](#where-its-headed)
* [Handling settings reference](#handling-settings-reference)
* [Privacy](#privacy)
* [Browser support and requirements](#browser-support-and-requirements)
* [Troubleshooting and FAQ](#troubleshooting-and-faq)
* [For developers](#for-developers)
* [Suggest a feature](#suggest-a-feature)
* [License and credits](#license-and-credits)

---

## What is Car Game?

Car Game is a small driving game and car physics project that lives in a folder of plain files. Open `index.html` in a browser and you are driving a McLaren F1 GTR around an open map with a few jump ramps. There is nothing to install and no server to run.

It started as a place to get one thing right: how a car feels to drive. The physics came first, and almost everything else (the world, the sound, the menus) is built around it or still waiting to be built.

This is **version 0.1.0, a pre-release**. It is the first thing I'm putting out, and I know how much is missing.

---

## Read this first: how rough it is

I would rather tell you than have you find out.

* **The sound is placeholder.** The engine, tyres, wind and road noise are all simple tones and filtered noise made in the browser. They are there so the car isn't silent while I work on the driving. They are not good, and they need a lot of work. Please don't judge the project by them.
* **There is nothing to *do* yet.** One car, one open map, no laps, no timing, no goals, no traffic.
* **There is no damage.** You can bump into trees and rocks and the car reacts, but it never gets hurt.
* **The graphics are a bonus, not the goal.** It looks decent on a good day. Looks are second priority to feel, and some of it is held together with tape.
* **The code is not tidy.** It works and it has physics tests, but it is a fast-moving project, not a polished library.
* **It has had very little testing.** Other computers, browsers and graphics cards may behave differently.

If something is broken, that is useful to know. See [Suggest a feature](#suggest-a-feature).

---

## Highlights

|||
|-|-|
|**Physics first**|A fixed-step vehicle simulation with a real engine, gearbox, suspension, tyres and aero. Handling is the part I care about most.|
|**Zero setup**|Plain files. No account, no install, no server, no build step needed to play.|
|**Live handling tuner**|Sixteen sliders change grip, steering, power, aero and more while you drive. One click returns to the car's original values.|
|**Built-in debug tools**|Render modes (wireframe, normals, depth, overdraw, AO buffer), a picture-in-picture render view, frame stats and an in-game physics self-test.|
|**Looks, when you want them**|Sky, clouds, day and night, headlights, tyre smoke and skid marks, with a *Look* setting to turn the expensive parts down.|
|**Wheel menu**|Hold `Tab` for a radial menu for lights, hazards, horn, underglow, paint, camera, night, clouds and more.|
|**Runs offline**|Once you have the files, nothing else is needed.|

---

## Quick start

### Option 1: just open the file

1. Download this repository (the green **Code** button, then **Download ZIP**) and unzip it.
2. Open `index.html` in a recent **Chrome or Edge** on a computer.
3. Click or press any key on the title card.
4. Drive. Press **?** at any time to see every control.

The game uses plain scripts only, so it works straight from your disk. You don't need to start a server.

### Option 2: host it (for example on GitHub Pages)

1. Put the files in a GitHub repository.
2. Go to **Settings, then Pages**, choose **Deploy from a branch**, pick `main` and `/ (root)`, and save.
3. Share the link: `https://<your-user>.github.io/<repo>/`.

### Your first drive

1. Hold `W` to accelerate, `A` and `D` to steer, `S` to brake, `Space` for the handbrake.
2. Click the game once to capture the mouse, then move it to orbit the camera. `Esc` lets go.
3. Head straight ahead from the start to find the orange ramps.
4. Hold `Tab` and move the mouse to open the wheel menu.
5. Press `R` any time to put the car back.

If it runs slowly, press `P` to lower the *Look* setting.

---

## Controls

Press **?** (or `F1`) in the game for the same list.

|Key|Action|
|-|-|
|`W` `S`|Gas, brake, reverse|
|`A` `D`|Steer|
|`Space`|Handbrake|
|`R`|Reset the car|
|`T`|Driving assists on / off|
|Mouse|Click to capture, then orbit the camera (`Esc` releases)|
|`C`|Look behind (hold)|
|Mouse wheel|Zoom|
|`[` `]`|Exposure|
|`Tab` (hold)|Wheel menu: move the mouse and release, or press `1` to `8`. `Q` / `E` switch tabs|
|`H` `N` `G`|Headlights, night, glass tint fix|
|`P`|Look: off, GTA grade, full (ambient occlusion and bloom)|
|`L`|Clouds: off, light, full|
|`U`|Paint colour picker|
|`M`|Mute|
|`I`|Handling settings|
|`J` `X`|Tyre smoke settings, smoke quality|
|`V` `B`|Render view (picture-in-picture), its angle|
|`Y` / `Shift+Y`|Render mode: wireframe, normals, depth, overdraw, AO buffer|
|`F` `K`|Frame stats, physics self-test|
|`O`|Wheel-arch occluders (debug)|

---

## How it works

The game is split into two halves that barely know about each other: the **physics**, which has no screen and no browser code, and the **game around it**, which draws the world and reads your keys.

```
 Keyboard and mouse
         |
         v
     Game loop  <---  Handling sliders
         |
         v
 Vehicle physics (fixed 240 Hz steps)  <---  Car data (cars.js)
         ^                                   Terrain and obstacles
         |
         v
 Car state: position, wheels, rpm, gear
         |
   +-----+-----------+
   |                 |
   v                 v
 Renderer        Dashboard, effects
 (three.js)      and synthesised sound
```

### 1. Physics

The car is one rigid body that can move and turn freely in 3D, with four independent wheels, each with its own suspension and tyre contact. The simulation runs in fixed steps of 1/240 of a second, whatever your frame rate is, and the picture is smoothed between the last two steps. That keeps the handling the same on a slow computer and a fast one.

Each step the engine makes torque from its rpm, the gearbox picks a gear (with quick, dual-clutch style shifts), the drive splits between the axles and across a limited-slip rear differential, and each tyre turns slip into force. Downforce, drag, rolling resistance, anti-roll and braking are all part of it. The car is tuned to reach 100 km/h in about 2.7 seconds.

### 2. The world

The ground is rolling hills made from noise, perfectly flat near the start. Trees and rocks stream in around you as you drive and act as solid obstacles. Four ramps are placed around the map for jumps. The physics asks the world two things only: *how high is the ground here*, and *what is near the car*.

### 3. Drawing and effects

Everything on screen is drawn with three.js. A physically based sky and clouds light the scene, with a night mode and headlights. Tyre smoke and skid marks come from what the tyres are doing. The *Look* setting chooses how much post-processing is used.

### 4. Sound

Right now it is a few oscillators and filtered noise driven by rpm, speed and tyre slip. It is a stand-in. See [Read this first](#read-this-first-how-rough-it-is).

---

## Features in detail

### Driving

* **Engine and gearbox.** Idle governor, torque curve, rev limiter, automatic shifting, reverse.
* **Drivetrain.** Rear-biased all-wheel drive with a limited-slip rear differential.
* **Suspension and tyres.** Independent wheels that droop in the air and load up in corners, with a tyre model that includes slip angle and relaxation.
* **Assists.** `T` turns on a counter-steer assist and ABS-style braking help. Turn it off for the raw car.
* **Jumps.** The car can leave the ground and land, and the dashboard shows your air time.
* **0 to 100 stopwatch.** Stop, floor it, and the dashboard times you.

### Dashboard

Speed, gear, a segmented rev bar that flashes near the redline, an assists chip, and airborne and 0 to 100 timers. Short messages pop up when you toggle things.

### Wheel menu

Hold `Tab`. Two tabs of eight slots, laid out as a ring.

|Tab|Slots|
|-|-|
|**Vehicle**|Headlights, high beams, hazards, horn, underglow, assists, paint|
|**World**|Night, camera distance, look, glass tint, reset car, view mode, clouds|

### Paint

`U` opens a picker with factory yellow, thirteen presets and a custom colour. Your choice is remembered.

### Debug and learning tools

* **Render modes (`Y`).** Wireframe, normals, depth, overdraw heat map, and the ambient occlusion buffer.
* **Render view (`V`, `B`).** A small live picture of what the camera sees, in a few sizes and angles.
* **Frame stats (`F`).** FPS, frame time, draw calls, triangles, memory and graphics card name.
* **Physics self-test (`K`).** Runs a separate car on a flat road and compares the results with saved numbers, so a physics change that breaks something shows up straight away.

---

## What is it for?

Honestly, I'm not completely sure yet. Here is what I think it could be useful for.

* **Driving around for fun.** It already does that.
* **A car physics engine for your own project.** The vehicle simulation has no screen code in it and is separate from the game. If you are building something that needs a car that behaves like a car, it might be a useful starting point. It is not packaged, documented or stable yet, so expect to read the code. See [For developers](#for-developers).
* **Playing with handling.** The sliders make it easy to feel what grip, downforce or steering lock actually change.
* **Learning.** A small, readable example of a vehicle simulation, a fixed-step game loop and a lot of three.js in plain JavaScript.
* **A base for a driving game.** The parts are there to build modes on top of.

If you have a use in mind, I'd like to hear it.

---

## Where it's headed

The aim is a **realistic driving simulator that puts feel first**: how the car responds, how the weight moves, how the tyres let go. Graphics matter, but they come second.

I also don't want it to be only one thing. The plan is **many driving modes**, from a hardcore simulation down to a forgiving **GTA V style arcade** mode, all on the same physics with the assists and behaviour changed. The handling sliders and the assists button are the first small steps toward that.

None of this is promised or dated. It is a direction, in roughly this order:

* [ ] **Real sound.** Replace the placeholder with something worthy of the car.
* [ ] **Better tyre and drivetrain realism.** Tyre temperature and wear, weight transfer, a proper clutch, manual gearbox.
* [ ] **Driving modes.** Simulation, a middle ground, and a GTA V style arcade mode.
* [ ] **More cars,** with their own data and feel.
* [ ] **More to do.** Tracks, lap timing, challenges.
* [ ] **Controller and wheel support,** plus steering and pedal input that isn't just keys.
* [ ] **Damage.** See below.
* [ ] **A proper cockpit and better graphics.** Last, on purpose.

### Damage

I haven't decided how damage will work, and I'd rather say that than make something up. The open questions are:

* Should it be **cosmetic only** (dents and scratches), or change how the car **drives** (bent suspension, a damaged engine)?
* Should it be **realistic**, or a **mode option** so the arcade mode can ignore it?
* How much should it cost in **performance**, since the simulation has to stay fast?

For now, collisions bump the car and shake the camera and that's all.

---

## Handling settings reference

Press `I` to open the panel. Every slider multiplies one part of the car's own data, so **1.00 means the car as it was built** (that is the default). Hover a name for a longer explanation. Buttons at the bottom: **Original**, **Grippy** (a more forgiving, grippier setup) and **Copy values**, which copies your settings so you can keep them.

|Group|Setting|What it does|
|-|-|-|
|**Steering**|Steering lock|How far the front wheels turn|
||Lock kept at speed|Higher means it still steers when fast|
||Steering speed|How fast the wheel moves to where you ask|
||Counter-steer assist|Strength of the automatic slide catching (needs `T` on)|
|**Grip**|Front grip|More makes the car turn in harder|
||Rear grip|More keeps the back planted|
||Tyre sharpness|How quickly the tyres reach full grip|
||Turn-in lag|0 means an instant tyre response|
|**Stability and aero**|Downforce|Pushes the car onto the road, more at speed|
||Spin damping|Resists the car rotating|
||Anti-roll stiffness|How much the body resists leaning|
||Air drag|Lower means a higher top speed|
|**Power and brakes**|Engine power|Acceleration|
||Brake strength|Stopping force|
||Handbrake|Rear lock-up strength|
||Rolling resistance|Constant drag from the tyres|

Settings are not saved between visits, so use **Copy values** if you find a setup you like.

---

## Privacy

* The game makes **no network requests**. There is no analytics, no tracking, no account and no server.
* It remembers only two things in your browser, using local storage: your **paint colour** and your **cloud setting**.
* The car model is stored inside a script file in the repository and decoded locally.

You can check by turning off your internet connection. It plays exactly the same.

---

## Browser support and requirements

* A recent **Chrome or Edge** on a desktop or laptop is the safest choice.
* The browser needs **WebGL**. If it is missing, the game shows an error screen that says so.
* A **keyboard and mouse** are needed. There is no gamepad or touch support yet.
* **Hardware acceleration** should be on. A recent graphics card is best; the *Full* look (ambient occlusion and bloom) is the most demanding setting.
* No internet connection is needed to play.

Other browsers may work partly or not at all. Phones and tablets are not a target.

---

## Troubleshooting and FAQ

**The screen is black, or I see an error page.**
The error page tells you what failed. The usual cause is WebGL being off. Turn on hardware acceleration in your browser settings and reload.

**It runs slowly or stutters.**
Press `P` to step the *Look* setting down, turn the clouds down with `L`, or lower the smoke with `X`. Press `F` to see your frame rate.

**The mouse isn't moving the camera.**
Click the game once to capture the mouse. `Esc` releases it.

**There's no sound.**
Browsers only allow sound after you click or press a key. Click the title card, and check `M` hasn't muted it.

**The sound is bad.**
Yes, I know. It's a placeholder. See [Read this first](#read-this-first-how-rough-it-is).

**The car feels strange.**
Press `I` and check the settings are at **Original**, or try **Grippy**. Turning assists off with `T` gives the car's raw behaviour.

**I got stuck or flipped over.**
Press `R`.

**Can I use the physics in my own project?**
Maybe. See [For developers](#for-developers). Check the licence section first.

**Is anything uploaded?**
No. See [Privacy](#privacy).

**Will there be damage / more cars / a controller mode?**
They are on the [roadmap](#where-its-headed). No dates.

---

## For developers

### Project layout

```
index.html        page and UI markup
style.css         UI styles
js/boot.js        startup error screen and WebGL check
assets/F1GTR.js   the car model, packed as a classic script
game.js           built bundle (generated, do not edit)
src/              game source
  game.src.js     the game: world, camera, input, wheel menu, HUD, audio
  vehicle.js      the vehicle physics (no DOM, no rendering)
  cars.js         car data: mass, engine, gears, suspension, tyres, aero
  tiresmoke.js    tyre smoke
  clouds.js       clouds
  renderview.js   picture-in-picture render view
  viewmodes.js    wireframe, normals, depth, overdraw, AO views
  tuning.js       handling settings panel
  selftest.js     in-game physics self-test
tools/            build and test scripts
vendor/           pinned three.js 0.160.0 used by the build
```

### Running and building

The game runs as is. `game.js` is generated from `src/`, so you only rebuild if you change the source.

```
bash tools/build.sh                # needs bun or esbuild; uses the three.js copy in vendor/
node tools/run-physics-tests.mjs   # physics regression checks, needs only Node
```

The build produces one plain script, so the game keeps working from `file://`.

### Using the physics in your own project

`src/vehicle.js` is the part you would reuse. It has no DOM or rendering code, runs in fixed steps, and exposes interpolated state for drawing. Its only dependency is the vector and quaternion maths from three.js.

* Create a `Vehicle` from a car data object (see `cars.js`), a list of wheel positions, and a `world` that answers `height(x, z)` and lists nearby box colliders.
* Call `step(dt, input)` at a fixed rate (`FIXED_DT`, 1/240 s), then `interp(alpha)` once per frame.
* The `TUNE` object holds the live handling multipliers.

It isn't packaged as a library and has no documentation beyond comments, and the interface may change. Treat it as source to read and adapt, not as a stable API.

### Tests

`node tools/run-physics-tests.mjs` runs scenarios such as a skid pad, a handbrake turn, a drop, parking on a slope, a ramp jump and a wall hit, and prints the results. The in-game self-test (`K`) does a similar job inside the browser.

---

## Suggest a feature

Found a bug, or have an idea or a use for this? Open an issue on this repository's **Issues** tab. Please include your browser, your graphics card and what you were doing.

Ideas on driving modes, physics realism and what a good damage system should be are especially welcome. Pull requests are welcome too, but this is an early project, so please open an issue first so we can agree on the direction.

---

## License and credits

<!-- Choose a license and add a LICENSE file, for example MIT. -->

Add your license here. Until a `LICENSE` file is added, all rights are reserved by the author.

* **three.js** is bundled into `game.js` and is MIT licensed. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
* **The car model** (`assets/F1GTR.js`): its author and licence still need to be recorded in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) before wider distribution.
* McLaren and F1 GTR are names of their respective owners. This project is not affiliated with or endorsed by McLaren.

---

<div align="center">
<sub>Pre-release v0.1.0. Feel first, looks second, sound still to come.</sub>
</div>
