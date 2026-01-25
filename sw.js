const CACHE_NAME = 'pl-date-v1448';
const VERSION = '1.4.48'; // Major.Minor.Patch
const DEV_MODE = false; // Set to true for development logging

const ASSETS = [
    '/',
    '/index.html',
    '/app.js',
    '/sw.js',
    '/manifest.json',
    '/icon-192.png',
    '/icon-192.webp',
    '/icon-512.png',
    '/icon-512.webp',
    
    // Data files
    '/data/cultural.js',
    '/data/holidays.js',
    '/data/namedays.js',
    '/data/namedays.json',
    '/data/historical.js',
    '/data/pagan.js',
    
    // Utils
    '/utils/audio.js',
    
    // Pages
    '/pages/help.js',
    
    // Components
    '/components/info-panel.js',
    
    // Core modules
    '/events.js',
    
    // Styles
    '/styles.css',
    '/debug-button.css'
];

self.addEventListener('install', (event) => {
    if (DEV_MODE) console.log(`[SW v${VERSION}] Installing...`);
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            if (DEV_MODE) console.log(`[SW v${VERSION}] Caching assets`);
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request).catch((error) => {
                if (DEV_MODE) console.error(`[SW v${VERSION}] Fetch failed:`, error);
                throw error;
            });
        })
    );
});

self.addEventListener('activate', (event) => {
    if (DEV_MODE) console.log(`[SW v${VERSION}] Activating...`);
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        if (DEV_MODE) console.log(`[SW v${VERSION}] Deleting old cache:`, cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
