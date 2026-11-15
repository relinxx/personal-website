const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/blogs.html',
  '/assets/index-C4mYjw5h.js',
  '/assets/index-xkXt_TeG.css',
  '/assets/page.js',
  '/assets/profile_pic-CaSYlVwb.png',
  '/assets/CV-Syed-Muhammad-Rehan.pdf'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});