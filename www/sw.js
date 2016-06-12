/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/asset/images/angel_16.png","c28bfa915a3da3c878bf88f7659b0143"],["/asset/images/character_16.png","9e58dcb156823ab04dc9cb3534c2bd92"],["/asset/images/character_spritesheet_32.png","8d4d4e76b410b70550b338f020681410"],["/asset/images/enemy_spritesheet_64.png","59748798d4494a733c28ecb82d9453ff"],["/asset/images/ghost_spritesheet_16.png","6878d4128a30151cc946b18f6bd29841"],["/asset/images/human_spritesheet_16.png","e151ebcb07419add8cf482a232d795cd"],["/asset/images/humanparts_spritesheet_8.png","4c28d89a2075f4dc24ce575a78924ed0"],["/asset/images/intro.png","8b589304e889c310b879349eb7d3c0d3"],["/asset/images/offering_stone_32.png","599ec66fb4996a0f88c46c294df7af57"],["/asset/images/player_score_16.png","9501a08158888209f1202f54ec842a50"],["/asset/images/powerup.png","0c9c5f1679ba74f99ffaa2caa481efff"],["/asset/images/slime_spritesheet_16.png","490aba2702dc74ced656a85c1f9872f1"],["/asset/images/summon_32.png","1726fa061d062a7089b90dbbca49a6c7"],["/asset/images/title.png","e9e00070ac43d00b5ea379d62719d808"],["/asset/images/you_lose.png","6d76f339d6353503e18544cfafcdb41d"],["/asset/images/you_win.png","adfe307f776caf094d6e26cda17e92c5"],["/asset/music/intro_music.mp3","0a18db864205afc5b4db5aa50c7fd857"],["/asset/music/level_music_1.mp3","bd30b2fd18f109825be4a83d400b02c6"],["/asset/music/level_music_2.mp3","99d0ced1ff04f45d262a2559bf6292f6"],["/asset/music/level_music_3.mp3","9ce690d3a76511ccb1e21a02e21687e0"],["/asset/music/lose_music.mp3","fbcf6606d5982a5667d85505fafe8e94"],["/asset/music/win_music.mp3","b3b4412448dcecaf265c95d8dba70be4"],["/asset/sfx/Long scream_1.mp3","77acb2a0c7631e1ea04b9c89c4ecb56c"],["/asset/sfx/Long scream_2.mp3","da003e9e997ddcdd75eb65d9a905f373"],["/asset/sfx/Scream_1.mp3","ae9172a058428e8fb38fb007f527b160"],["/asset/sfx/Scream_10.mp3","626f76205c4e962f397894b5b6b344a1"],["/asset/sfx/Scream_2.mp3","ba401d7884fbb1985cdc33c8b7c4a7d8"],["/asset/sfx/Scream_3.mp3","21cb3ff0dd7b1e0011e2435e7074d906"],["/asset/sfx/Scream_4.mp3","ae5936f6ef6123fa5771a2fac909fde5"],["/asset/sfx/Scream_5.mp3","d7a6e760e488cb827a59f38f58cf6791"],["/asset/sfx/Scream_6.mp3","527e2809cde07dececc480d8bf6d4898"],["/asset/sfx/Scream_7.mp3","11a8047ab8d66789a1507b9d4428548e"],["/asset/sfx/Scream_8.mp3","fc9ab42736abc3bc41d431c15d13f079"],["/asset/sfx/Scream_9.mp3","b61f32a042cf406a1446b1cb8b8a011d"],["/asset/sfx/angel_1.mp3","eb4886c6bfa0d88a285efe54c8a33c8b"],["/asset/sfx/angel_2.mp3","a4c547869f1d56a2f79ca5ec556ac4d1"],["/asset/sfx/eating_1.mp3","d7429ccb4a0534cee537261ca4dfae35"],["/asset/sfx/eating_2.mp3","71331342ed877519d7c0d3f32055114f"],["/asset/sfx/explosion.mp3","cbb107a808a44d0f7436bd18e7ebb64a"],["/asset/sfx/hyena.mp3","0955c800be89c09847afe5a6eceebfa8"],["/asset/sfx/screamCalzon.mp3","7b270243bff67fe3b24b79748667168e"],["/asset/sfx/screamWilhelm.mp3","db4dba67c9694614fea4f194639932b1"],["/asset/sfx/summon_1.mp3","541f1551ad6baa762dbff2e437eb134d"],["/asset/sfx/summon_2.mp3","be55414a152de6c538cab9e8f21b996a"],["/asset/sfx/summon_orig.mp3","a7000db8c882960bd9c3e7d310d5b890"],["/asset/sfx/vomit_1.mp3","31c93bf20ba5ec35e5df2acd4048b143"],["/asset/sfx/vomit_2.mp3","3b6a67eec6d93596ba4aafb216b99590"],["/asset/tileset/tileSnow.png","48141c947e90e13c93109007c466b3a4"],["/asset/tileset/tiles.png","6262e438da90586827294ca13bd68538"],["/asset/tileset/tilesdarkgreen.png","d7055b241fd1e1f7a30c2a7d48c9a80e"],["/asset/tileset/tileset.json","17c357bcd535faaffa7295a3562d401f"],["/css/stylesheet.css","ea45cd1e4eae36cbb62f74c74625dea7"],["/index.html","4e78a2b9955a1ba9447740d86363ac67"],["/lib/phaser.min.js","1b9153d0183fa6a970a29b9392b9a59e"],["/manifest.json","ab9059353457c7734766909e855fd801"],["/src/Character.js","accaf5e6d3e53e0da434e5ad50e3d871"],["/src/Enemy.js","d6462cf178810164b8817b86a533f1a4"],["/src/FollowingMob.js","e4efc1562d7e112642ea4a0b24b15947"],["/src/Game.js","025909a3e08ca99e4941eaf8c8d2139b"],["/src/Ghost.js","02b41a309d17e6a05e73ae485f1fd59e"],["/src/Human.js","d029b471a38f8632d1b9fb1382f190d4"],["/src/MovingSprite.js","65346017a581be8c2baa871b7c87e0c8"],["/src/OfferingStone.js","b7a03ea4ab5fdb6c408ae306ba7ac4af"],["/src/PowerUp.js","396ac50e9ac12949faae33b667bc7bed"],["/src/Prefab.js","cdc96b6d4df274e87348feed078da679"],["/src/SoundGroup.js","247d5631f55088de7f9ee2e174d159e0"],["/src/Summon.js","5447ca2c55ffa8b90f9506b46d10e4eb"],["/src/SummonFromHell.js","49ba74c96568326811100f75d9aa9c0d"],["/src/World.js","09ff5fd6eadd869632f176bac181d7e1"],["/src/ai.js","18bde397968eb3a62781eafa26c407ab"],["/src/app.js","2f6f811309dd79bd4d7f3fe0d3bff753"],["/src/astar.js","5b0ac974df2df5b0658a22236c54454b"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




