/* ORIENT Aftersales - service worker: menyimpan kerangka aplikasi agar cepat dibuka & tetap tampil saat offline.
   Data aplikasi (Google Apps Script) selalu diambil langsung dari internet, tidak disimpan di perangkat. */
const VERSI = 'orient-app-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/logo.png', './icons/favicon-32.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSI).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== VERSI).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin) return; // Google Apps Script: langsung ke internet
  e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(VERSI).then(x => x.put(e.request, c)); return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html'))));
});
self.addEventListener('message', e => { if (e.data === 'skipWaiting') self.skipWaiting(); });
