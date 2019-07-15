importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

// network first
workbox.routing.setDefaultHandler(
  new workbox.strategies.NetworkFirst()
);
