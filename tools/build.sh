#!/usr/bin/env bash
# Rebuilds game.js from src/ using the three.js copy in vendor/. No npm / no internet needed.
# Uses `bun build` if bun exists, otherwise falls back to esbuild (found in the Claude sandbox
# inside the global tsx package). Either way the result is one classic script (IIFE).
# Usage (from the project folder):  bash tools/build.sh
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT
mkdir -p "$TMP/node_modules/three" "$TMP/src"
tar -xzf "$ROOT/vendor/three-0.160.0.tgz" -C "$TMP/node_modules/three" --strip-components=1
cp "$ROOT"/src/game.src.js "$ROOT"/src/vehicle.js "$ROOT"/src/cars.js "$ROOT"/src/selftest.js "$ROOT"/src/tiresmoke.js "$ROOT"/src/tuning.js "$ROOT"/src/smokeatlas.js "$ROOT"/src/renderview.js "$ROOT"/src/viewmodes.js "$ROOT"/src/clouds.js "$TMP/src/"
ESB="$(command -v esbuild || true)"
[ -z "$ESB" ] && for p in /home/claude/.npm-global/lib/node_modules/tsx/node_modules/esbuild/bin/esbuild /usr/lib/node_modules/tsx/node_modules/esbuild/bin/esbuild; do [ -x "$p" ] && ESB="$p" && break
done
if command -v bun >/dev/null 2>&1; then
  ( cd "$TMP" && bun build src/game.src.js --minify --target=browser --format=iife --outfile=game.js )
elif [ -n "$ESB" ]; then
  ( cd "$TMP" && "$ESB" src/game.src.js --bundle --minify --target=es2022 --format=iife --outfile=game.js --log-level=warning )
else
  echo "No bundler found (need bun or esbuild)" >&2; exit 1
fi
node --check "$TMP/game.js"
cp "$TMP/game.js" "$ROOT/game.js"
echo "game.js rebuilt: $(wc -c < "$ROOT/game.js") bytes"
