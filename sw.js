// Offline support: precache the whole app, then serve cache-first.
// Bump VERSION whenever you change any file so phones pick up the update.
const VERSION = "v1";
const CACHE = "five-ideas-" + VERSION;
const ASSETS = [
  "./", "index.html", "manifest.webmanifest",
  "css/styles.css", "css/fonts.css",
  "js/data.js", "js/app.js",
  "fonts/DMMono-400.woff2", "fonts/DMMono-500.woff2",
  "fonts/InstrumentSerif-400.woff2", "fonts/InstrumentSerif-400-italic.woff2",
  "fonts/SchibstedGrotesk-400.woff2", "fonts/SchibstedGrotesk-500.woff2", "fonts/SchibstedGrotesk-600.woff2",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("five-ideas-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).catch(() => caches.match("index.html")))
  );
});
