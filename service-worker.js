/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "75f011a8d64c368f309cf53cd8ab4f03"
  },
  {
    "url": "assets/css/1.styles.1e9b88f5.css",
    "revision": "10236614c760286a4e233172ac802ab7"
  },
  {
    "url": "assets/css/11.styles.595ba917.css",
    "revision": "f7ab565b69f66d7ba0176b51a3c43123"
  },
  {
    "url": "assets/css/2.styles.22a3d6eb.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/3.styles.09ea2d84.css",
    "revision": "ec869c559af5a9f07a2eed535dfddb8f"
  },
  {
    "url": "assets/css/4.styles.51ce7681.css",
    "revision": "e0956f667da59271cb4397d286f4b10a"
  },
  {
    "url": "assets/css/5.styles.d6ed607a.css",
    "revision": "1f655dc6d91911a9cab832d676df0944"
  },
  {
    "url": "assets/css/6.styles.6be78feb.css",
    "revision": "3994acfaa5723745cd76d900ab30f3d9"
  },
  {
    "url": "assets/css/styles.da61f912.css",
    "revision": "b1038d2a4dda0e4389da12d5beb0d4de"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.1e9b88f5.js",
    "revision": "f800e200c088a0f83e10a9444e6d20bb"
  },
  {
    "url": "assets/js/10.3c158116.js",
    "revision": "8aa8fdffe30d39b818726f2f9fc8b9b6"
  },
  {
    "url": "assets/js/11.595ba917.js",
    "revision": "e126bf14a9ef5b318d6a2eb7de00bc2b"
  },
  {
    "url": "assets/js/2.22a3d6eb.js",
    "revision": "6a085171263d296a1f859577c2acf37f"
  },
  {
    "url": "assets/js/3.09ea2d84.js",
    "revision": "565cbcc4eab165444d1be01c1b090668"
  },
  {
    "url": "assets/js/4.51ce7681.js",
    "revision": "5c6138ebb244d157f753fa4c9c245f26"
  },
  {
    "url": "assets/js/5.d6ed607a.js",
    "revision": "04fd1f53b44be88db8fb65a0b485636b"
  },
  {
    "url": "assets/js/6.6be78feb.js",
    "revision": "57ad747ae6eb33305f13dc79a3cd6f19"
  },
  {
    "url": "assets/js/7.8c9529aa.js",
    "revision": "181485b8cfaf605a2feaa65ef3a76b67"
  },
  {
    "url": "assets/js/8.a85436cd.js",
    "revision": "10b90315f8ba7ef572e15be7a58070a4"
  },
  {
    "url": "assets/js/9.b78e306a.js",
    "revision": "cd288e0f66ebec59ff3a6b5dae672792"
  },
  {
    "url": "assets/js/app.da61f912.js",
    "revision": "78a8036834265e0282ed4a8f4230754a"
  },
  {
    "url": "images/header-logo.png",
    "revision": "6f25c397b456af8a46f6b2d778dbed3c"
  },
  {
    "url": "images/header-logo2.png",
    "revision": "bab61783d3f5c8000b3f55add7e91092"
  },
  {
    "url": "images/lesson-1/apache.png",
    "revision": "6bc5bdda22380b019ae42b19188435ad"
  },
  {
    "url": "images/lesson-1/nginx.png",
    "revision": "fc3637c9ac4ca54048db86b2330653c0"
  },
  {
    "url": "images/logo.jpg",
    "revision": "3a6eab429990683417d18896ce1a6947"
  },
  {
    "url": "index.html",
    "revision": "35075c342fbc665dc1324489a5669477"
  },
  {
    "url": "lesson-1/index.html",
    "revision": "2524713727ba9da69f48aec801ce13a9"
  },
  {
    "url": "lessons/lesson-2.html",
    "revision": "430ec33310dd5ece555eb217039b9b54"
  },
  {
    "url": "lessons/lesson-3.html",
    "revision": "8356172cbc0dfda76aadb4a1c2d515dd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
