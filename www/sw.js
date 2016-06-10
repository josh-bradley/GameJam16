var cacheName = 'not-a-orge-0-0-06';

var filesToCache = [
    // We add this as well as index.html as the user may hit '/' or '/index.html'
    '/',
    '/index.html'
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                console.log('[ServiceWorker] Removing old cache', key);
                if (key !== cacheName) {
                    return caches.delete(key);
                }
            }));
        })
    );
});

self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);

    e.respondWith(
        caches.match(e.request).then(function (response) {
            if (response) {
                console.log("Returning from cache: " + e.request.url);
                return response;
            }

            console.log("fetching from network");
            return fetch(e.request)
                    .then(function(response) {
                        return caches.open(cacheName).then(function(cache) {
                            cache.put(e.request.url, response.clone());
                            console.log('[ServiceWorker] Fetched&Cached Data');
                            return response;
                        });
                    });
        })
    );
});