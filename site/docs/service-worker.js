"use strict";var precacheConfig=[["./cn.html","e22c1753266e3bdd4f8d9a9605262d9a"],["./index.html","e696a57690f583ce14bb76e347aba35d"],["./static/css/cn.4dd07f49.css","476d16186dc05ff3faa0a5d4dc9ac72c"],["./static/css/index.4dd07f49.css","9ad340cc60e8fed0f9856b562708144e"],["./static/js/0.6eba002a.chunk.js","10a7732c5b4477fc66fa03c7b4183712"],["./static/js/1.fd1a4fde.chunk.js","a76f3308d1a0a799fafc7986adfcac3f"],["./static/js/10.d0486626.chunk.js","8ecc86fcae9c62d5827a63e62a1cfa2d"],["./static/js/11.1b7cb28d.chunk.js","c859c601142c957121972968bfd03aef"],["./static/js/12.7bbefe4a.chunk.js","e0570c14ebb59247f2460343290d7a78"],["./static/js/13.187d2ee6.chunk.js","549136e530f56054224ab5ab0a242ec4"],["./static/js/14.d69bf4cf.chunk.js","7cc9d3372152f6664fbd21bc954fee51"],["./static/js/15.29ed0917.chunk.js","8bb499b1ef2b505ff57453370a5e8be4"],["./static/js/16.c061a335.chunk.js","a12eff07c194f1ffac75055b2ddc5567"],["./static/js/17.98ec3c54.chunk.js","17e20ada0c181f694460ce73c277ab94"],["./static/js/18.79501bbe.chunk.js","fa63b751d97e3389a470b19b086832a4"],["./static/js/19.0c576ee5.chunk.js","24b8e3282ea2b2321d8dc45e0bb92757"],["./static/js/2.56c4128f.chunk.js","78af2d6d502c5be7d6d2e7325f3862d4"],["./static/js/20.74ce16c4.chunk.js","ddaae1fd0e7423bcf116302e449ce6ac"],["./static/js/21.f0bfd8f6.chunk.js","bc8a9b849fae2d3fcc6ee6dec8e2aa34"],["./static/js/22.507213f4.chunk.js","60a211d3277139e17c0a324d336fe626"],["./static/js/23.0d3df93c.chunk.js","76a9151b624a2dcb6814fa3a20996e6f"],["./static/js/24.6b1e5b87.chunk.js","3fa554ee2268c08c7cbb5bd8d0216493"],["./static/js/25.1a80d358.chunk.js","fa027d82b5ee3c6f40fa179d7893ca58"],["./static/js/26.5fddfd58.chunk.js","64b768c8758c425f7eced149eef391fb"],["./static/js/27.1d911d63.chunk.js","14f52bed5380de7c23dd84dd6a5c5bc3"],["./static/js/28.613645ee.chunk.js","bd1925137dfe218d63c2460c13a20419"],["./static/js/29.bdde5e22.chunk.js","aa323841ee405242c47ee9d2cd5892c3"],["./static/js/3.95dc6d3d.chunk.js","145bc7b615d6e689979496d92aa26a96"],["./static/js/30.413d6200.chunk.js","f5390b7ab7ac28f9f90693d69565252f"],["./static/js/31.2d60b0ad.chunk.js","6ae9347fdab2fb3d2fd86ff9c76d9680"],["./static/js/32.82312b44.chunk.js","4c3acae9a5c503bfc917f58062b8fc9a"],["./static/js/33.82a91116.chunk.js","378e9009a387d13a546b6121aa9d76b2"],["./static/js/4.ef4e50b7.chunk.js","6e20d716af93d1591d67c5a36295a465"],["./static/js/5.4f7dc34c.chunk.js","728828cb4d6ab8af764bbb67b60f6cf7"],["./static/js/6.b671be71.chunk.js","1be65b2298e169a3536973e2074cccde"],["./static/js/7.84f1e9ff.chunk.js","e2a1b1b2ddba3f8668142f879df30445"],["./static/js/8.3ca68a2f.chunk.js","2d8eedca499016e8f4f895aec3f5abe1"],["./static/js/9.41bdd90e.chunk.js","b8a4c25e3ddd1ab3fbab6494abee3bbb"],["./static/js/cn.3d4fe6d6.js","ef089f5d91ec175f832fbc32885dcc06"],["./static/js/index.a68d1538.js","5758f9f9d7eb2230a5064f2d8aafb75f"],["./static/media/omi-logo2019.923166c3.svg","923166c362dce831a15c447b19a622f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=c),a.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,a,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var a=new URL(c).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return a.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],a=e[1],t=new URL(c,self.location),s=createCacheKey(t,hashParamName,a,/\.\w{8}\./);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){if("GET"===c.request.method){var e,a=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a));var s="./index.html";!e&&"navigate"===c.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],c.request.url)&&(a=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)}))}});