'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/assets/images/error_404.jpg": "b4d08e887aa27a75c0e366fa9ed2040a",
"assets/assets/images/no_network.png": "c70e7f1817a2e6eb1a3844f3a1608373",
"assets/assets/images/google_logo.png": "d9cabc7832f5884fd1a5532f7946b96d",
"assets/assets/images/facebook_logo.png": "77d199c5b5fc1a2f7fa8683b5cfd67b6",
"assets/assets/images/email_logo.png": "d345d9ffde11f0a838b812faeb17a1f4",
"assets/assets/images/apple_logo.png": "cf11ebcc0a874e3ad3830431f7b0ab58",
"assets/assets/images/phone_logo.png": "b857c9aa60e871801ed5063dd63df4b9",
"assets/assets/icons/red_error.svg": "2760109199efab7dbd75b6e99c6d89d2",
"assets/assets/icons/empty_data.svg": "ef2fcbcede43bfc63ffa94d55f0e05e2",
"assets/assets/icons/app_logo.png": "0dd698a71ff6dac2da093ad6f19e5773",
"assets/assets/lottie/onboarding3.json": "48257b8edfd0b107ad24e4d36d74ce3b",
"assets/assets/lottie/onboarding1.json": "7eed0f68676c339fe175a5c357c17682",
"assets/assets/lottie/update_available.json": "41d4c8ca5b0b883a5b6cbb8dce1752cf",
"assets/assets/lottie/otp.json": "e0fc1049f0ebdea3c65bc2c46fd00afe",
"assets/assets/lottie/add.json": "79e4de7f0e4cd36c81adfa4518ca7a67",
"assets/assets/lottie/location.json": "832cf5326f13832b38fbdbfa2fc1c00d",
"assets/assets/lottie/bg2.json": "cedfe01cb0e8c4d707119d2bc7d4084c",
"assets/assets/lottie/bg3.json": "cedfe01cb0e8c4d707119d2bc7d4084c",
"assets/assets/lottie/onboarding2.json": "30567e6bfbf692bb00a8a8d75c19da5d",
"assets/assets/lottie/bg1.json": "cedfe01cb0e8c4d707119d2bc7d4084c",
"assets/assets/lottie/maintenance.json": "71a99b972ddd809e119a623c1bd7283d",
"assets/assets/lottie/login.json": "6698c8f5b1fa237b8c9095b94c277d79",
"assets/fonts/MaterialIcons-Regular.otf": "0c86454a3b8624d2ff12ac9e5eda2706",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "ce93df7b168e9aa79a2b9d687002e2bc",
"assets/NOTICES": "98648785e53660c5cb95378db2aad7e9",
"assets/AssetManifest.bin": "5aabe8ca58342250d5282ba766dd5d29",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"icons/Icon-maskable-512.png": "136c0067234c4541c52e28dc80e37d90",
"icons/Icon-192.png": "80f8dbf1e500f902ab289882d193e9d6",
"icons/Icon-512.png": "136c0067234c4541c52e28dc80e37d90",
"icons/Icon-maskable-192.png": "80f8dbf1e500f902ab289882d193e9d6",
"favicon.png": "9a9aea886658b49515f815d4ab2494b9",
"index.html": "82f5b078aac513f9f1c8534459a9cd09",
"/": "82f5b078aac513f9f1c8534459a9cd09",
"manifest.json": "733d40d532a763bb815a39e6bafdf610",
"version.json": "72295cdffa10c72c7fb47046936b5e8c",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"firebase-messaging-sw.js": "322f7a1d05399ee2c160a6e2f5b85db3",
"main.dart.js": "55bc3d3f3cf58d2a587ccc04798ac9a9",
"splash/img/light-1x.png": "291ca6f677b79cb7b32a3363a93af996",
"splash/img/dark-4x.png": "8bcfee33f8ba19c1127cdeea09f0dea1",
"splash/img/dark-3x.png": "28eb7a800d359b53137f0fafc4c1f528",
"splash/img/light-3x.png": "28eb7a800d359b53137f0fafc4c1f528",
"splash/img/light-4x.png": "8bcfee33f8ba19c1127cdeea09f0dea1",
"splash/img/dark-2x.png": "219b0c404d8d8f9b88c37a97f0470161",
"splash/img/dark-1x.png": "291ca6f677b79cb7b32a3363a93af996",
"splash/img/light-2x.png": "219b0c404d8d8f9b88c37a97f0470161",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "c94c38ff00a9d487c353a2d78989ea08",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
