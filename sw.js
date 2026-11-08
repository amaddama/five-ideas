// Offline support: precache the whole app; serve network-first with a saved-copy fallback.
// Bump VERSION whenever you change any file so phones pick up the update.
const VERSION = "v5";
const CACHE = "five-ideas-" + VERSION;
const ASSETS = [
  "./", "index.html", "manifest.webmanifest",
  "css/styles.css", "css/fonts.css",
  "js/data.js", "js/app.js", "js/status.js",
  "fonts/DMMono-400.woff2", "fonts/DMMono-500.woff2",
  "fonts/InstrumentSerif-400.woff2", "fonts/InstrumentSerif-400-italic.woff2",
  "fonts/SchibstedGrotesk-400.woff2", "fonts/SchibstedGrotesk-500.woff2", "fonts/SchibstedGrotesk-600.woff2",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"
];

self.addEventListener("install", e => {
  // __ready is written only after every asset is cached; the page's status pill checks for it.
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(ASSETS.map(u => fetch(new Request(u, { cache: "reload" })).then(r => { if (!r.ok) throw new Error(u); return c.put(u, r); }))).then(() => c.put("__ready", new Response("ok"))))
      .then(() => self.skipWaiting())
  );
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("five-ideas-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
// Network-first (so updates show up right away when online), falling back to the saved copy
// when offline or the connection is bad (3s timeout, which also covers flaky airplane wifi).
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    new Promise((resolve, reject) => {
      const t = setTimeout(reject, 3000);
      fetch(req, { cache: "no-cache" }).then(res => { clearTimeout(t); resolve(res); }, err => { clearTimeout(t); reject(err); });
    }).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() =>
      caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match("index.html"))
    )
  );
});
