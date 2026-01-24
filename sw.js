const CACHE_NAME = 'pl-date-v1400';
const ASSETS = [
    '/',
    '/index.html',
    '/app.js',
    '/sw.js',
    '/manifest.json',
    '/icon-192.png',
    '/icon-512.png',
    
    // Data files
    '/data/cultural.js',
    '/data/holidays.js',
    '/data/namedays.js',
    '/data/namedays.json',
    '/data/historical.js',
    '/data/pagan.js',
    '/data/phonetics.js',
    
    // Utils
    '/utils/numbers.js',
    '/utils/colors.js',
    '/utils/audio.js',
    '/utils/dates.js',
    
    // Pages
    '/pages/help.js',
    '/pages/grammar.js',
    
    // Components
    '/components/info-panel.js',
    
    // Core modules (not yet moved)
    '/events.js',
    
    // Styles
    '/styles.css',
    '/debug-button.css'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
