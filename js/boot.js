// Loads first. Shows any startup problem on screen instead of leaving a black page.
(function () {
  function show(title, detail, hint) {
    var el = document.getElementById("errscreen");
    if (!el) return;
    var load = document.getElementById("load"); if (load) load.style.display = "none";
    var st = document.getElementById("start"); if (st) st.hidden = true;
    el.style.display = "block";
    el.innerHTML = "";
    var card = document.createElement("div"); card.className = "err-card";
    var h = document.createElement("h1"); h.textContent = title;
    var p = document.createElement("p");
    p.textContent = hint || "Something went wrong while starting the game. Try reloading. If it keeps happening, please open an issue and paste the details below.";
    var pre = document.createElement("pre"); pre.textContent = detail;
    var b = document.createElement("button"); b.type = "button"; b.textContent = "Reload"; b.onclick = function () { location.reload(); };
    card.appendChild(h); card.appendChild(p); card.appendChild(pre); card.appendChild(b);
    el.appendChild(card);
  }
  window.cgFail = show;
  window.addEventListener("error", function (e) {
    show("Script error", (e.message || "unknown") + "\n" + (e.filename || "") + ":" + (e.lineno || ""));
  });
  window.addEventListener("unhandledrejection", function (e) {
    show("Unhandled error", String((e.reason && e.reason.stack) || e.reason));
  });
  try {
    var c = document.createElement("canvas");
    if (!(c.getContext("webgl2") || c.getContext("webgl"))) {
      show("Cannot start", "WebGL is not available in this browser.", "Car Game draws with WebGL. Use a current Chrome, Edge or Firefox and make sure hardware acceleration is turned on in the browser settings.");
    }
  } catch (e) { show("Cannot start", "WebGL check failed: " + e.message); }
})();
