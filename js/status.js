// Offline status pill: tells you whether the app is saved on this device for use without a connection.
(function () {
  var pill = document.createElement("button");
  pill.className = "net-pill";
  pill.type = "button";
  pill.setAttribute("aria-live", "polite");
  pill.innerHTML = '<span class="dot"></span><span class="lbl"></span><span class="sub"></span>';
  document.body.appendChild(pill);
  var lbl = pill.querySelector(".lbl"), sub = pill.querySelector(".sub");

  var saved = false, supported = "serviceWorker" in navigator && location.protocol.indexOf("http") === 0;

  function show(mode, label, detail) {
    pill.setAttribute("data-mode", mode);
    lbl.textContent = label;
    sub.textContent = detail;
  }

  function render() {
    var online = navigator.onLine !== false;
    if (!supported) return show("off", "Online only", "Open the hosted link in a browser to save it for offline use.");
    if (!saved) return show("wait", "Saving for offline…", "Stay connected a moment. This only happens once.");
    if (!online) return show("offline", "Offline · saved copy", "You're offline and everything still works.");
    show("ready", "Ready for offline", "Saved on this device. Works in airplane mode.");
  }

  function check() {
    if (!supported || !window.caches) return render();
    caches.match("__ready").then(function (hit) { saved = !!hit; render(); }, render);
  }

  pill.addEventListener("click", function () { pill.classList.toggle("open"); });
  window.addEventListener("online", render);
  window.addEventListener("offline", render);

  render();
  if (supported) {
    navigator.serviceWorker.ready.then(check, render);
    navigator.serviceWorker.addEventListener("controllerchange", check);
    setInterval(function () { if (!saved) check(); }, 1500);
  }
})();
