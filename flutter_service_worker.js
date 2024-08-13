'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".vercel/project.json": "64024326c097bd774962775062b40fac",
".vercel/README.txt": "2b13c79d37d6ed82a3255b83b6815034",
"assets/AssetManifest.bin": "8bb30ca381089289537a65dbdd108b49",
"assets/AssetManifest.bin.json": "2fecb1ccc0b3914a668ecccf322c689f",
"assets/AssetManifest.json": "c039536b586c53dd9f28431874accb2a",
"assets/assets/finapp_logo.png": "570929ecfc84a456c8cd6a2eec1ae5dc",
"assets/assets/fonts/RedHatDisplay-Black.ttf": "e66cc0561b80dd94666f4ed080be5838",
"assets/assets/fonts/RedHatDisplay-BlackItalic.ttf": "6e779eaf74fbd356674fa21f1aee6061",
"assets/assets/fonts/RedHatDisplay-Bold.ttf": "b5cc2bf93bb91fc75dd463daee907d80",
"assets/assets/fonts/RedHatDisplay-BoldItalic.ttf": "160049144e339213ff47a5a4b86f5c1a",
"assets/assets/fonts/RedHatDisplay-ExtraBold.ttf": "83285c381c880264514d2e7aa53755e1",
"assets/assets/fonts/RedHatDisplay-ExtraBoldItalic.ttf": "9ebf2f290a3dd5546afe9d5b87d412ad",
"assets/assets/fonts/RedHatDisplay-Italic.ttf": "f193123393699299e99fbb224f1ebb16",
"assets/assets/fonts/RedHatDisplay-Light.ttf": "7007bab8d9f84ede6b1060c8f6c6ef72",
"assets/assets/fonts/RedHatDisplay-LightItalic.ttf": "030ec0abb0ad9f0c838cec269bc91838",
"assets/assets/fonts/RedHatDisplay-Medium.ttf": "a18908970bf89b4df23e683430abe4eb",
"assets/assets/fonts/RedHatDisplay-MediumItalic.ttf": "0b460b6f77412baaf05244ab8891b970",
"assets/assets/fonts/RedHatDisplay-Regular.ttf": "f913c823bff6d018e14f320bfb31ffa4",
"assets/assets/fonts/RedHatDisplay-SemiBold.ttf": "769521f666c584b69561316df46274aa",
"assets/assets/fonts/RedHatDisplay-SemiBoldItalic.ttf": "22f9c96243c8028f13c40a204b1c2747",
"assets/assets/Icon-maskable-192.png": "d5586f88ff7853a8b7a25e5982cf6618",
"assets/assets/Icon-maskable-512.png": "75c960c754787bfa8b02084ca44213be",
"assets/assets/image1.png": "1d874a6c8e12630c9478fe81dfcb8950",
"assets/assets/logo_144x144.png": "bf329fe0d3e88494c6614275a5fe1e62",
"assets/assets/logo_192x192.png": "d5586f88ff7853a8b7a25e5982cf6618",
"assets/assets/logo_36x36.png": "ab373d63f0d75e579aba18e5213269ad",
"assets/assets/logo_48x48.png": "00db97955691a95d8bcec8abbd2180c1",
"assets/assets/logo_512x512.png": "75c960c754787bfa8b02084ca44213be",
"assets/assets/logo_72x72.png": "481b22273c1e6b32e1a77efe5ba13b62",
"assets/assets/logo_96x96.png": "40e6a9ac7c5b43a79d3817c3f64935eb",
"assets/assets/save_money.png": "98e352b69eec5a37a72ecf3258862ee3",
"assets/assets/track_expenses.png": "8fdf01540562557f11f384d1054ef628",
"assets/FontManifest.json": "229f2c6d4af64af11000d1b7dc86873d",
"assets/fonts/MaterialIcons-Regular.otf": "07358b0f4f2910f2fc300543c02b8f45",
"assets/NOTICES": "f868c988d0f7ba61b389dc7359ca31c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "27d780a54df0d1d3f2bddce6940db3ac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d6820f972e1b8db670393ecca812944b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "daca1712ce92dc96c8be99adf463ffd0",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "9c06c5fde7a2f4d6b25cccafbaddcce8",
"icons/Icon-192.png": "d5586f88ff7853a8b7a25e5982cf6618",
"icons/Icon-512.png": "75c960c754787bfa8b02084ca44213be",
"icons/Icon-maskable-192.png": "d5586f88ff7853a8b7a25e5982cf6618",
"icons/Icon-maskable-512.png": "75c960c754787bfa8b02084ca44213be",
"index.html": "a0a44460c4e26d201e1f6d5dd805bdd2",
"/": "a0a44460c4e26d201e1f6d5dd805bdd2",
"main.dart.js": "f7f4b90fbd3dfaf9f6a380a130edfdd8",
"manifest.json": "2f9f19565a336074dc9239fa42550a83",
"version.json": "b3888ca42d3509b8f5dffad229c9ab13"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
