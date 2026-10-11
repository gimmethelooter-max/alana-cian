const CACHE_NAME = 'alana-cian-v1';
const CACHE_ASSETS = 'alana-cian-assets-v1';
const CACHE_DYNAMIC = 'alana-cian-dynamic-v1';

// Core app shell - always cache
const APP_SHELL = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './config.js',
  './manifest.webmanifest'
];

// Assets to cache on install
const ASSETS = [
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event: cache essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then((cache) => {
        console.log('[SW] Caching app shell');
        return cache.addAll(APP_SHELL);
      }),
      caches.open(CACHE_ASSETS).then((cache) => {
        console.log('[SW] Caching assets');
        return cache.addAll(ASSETS).catch(() => {
          console.log('[SW] Some assets not available yet');
        });
      })
    ])
  );
  self.skipWaiting();
});

// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      console.log('[SW] Cleaning up old caches');
      return Promise.all(
        keys
          .filter((key) => !key.includes('alana-cian'))
          .map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch event: intelligent caching strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Don't cache non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Strategy 1: Cache-first for app shell and assets
  if (
    url.pathname === '/' ||
    url.pathname === '/index.html' ||
    url.pathname === '/styles.css' ||
    url.pathname === '/app.js' ||
    url.pathname === '/config.js' ||
    url.pathname === '/manifest.webmanifest' ||
    url.pathname.startsWith('/icons/')
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request)
          .then((response) => {
            if (!response || response.status !== 200) {
              return response;
            }
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, clone);
            });
            return response;
          })
          .catch(() => {
            // Return cached version if offline
            return caches.match(request) || caches.match('./index.html');
          });
      })
    );
    return;
  }

  // Strategy 2: Network-first for API calls (Supabase, external resources)
  if (url.host !== self.location.host || url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_DYNAMIC).then((cache) => {
              cache.put(request, clone);
            });
          }
          return response;
        })
        .catch(() => {
          // Try cache if network fails
          return caches.match(request);
        })
    );
    return;
  }

  // Default: network with fallback to cache
  event.respondWith(
    fetch(request)
      .then((response) => {
        const clone = response.clone();
        if (response.ok && request.url.startsWith(self.location.origin)) {
          caches.open(CACHE_ASSETS).then((cache) => {
            cache.put(request, clone);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(request) || caches.match('./index.html');
      })
  );
});

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
