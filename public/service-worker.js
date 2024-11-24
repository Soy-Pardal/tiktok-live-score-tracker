const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/script.js',
  '/styles.css',
  // Adicione outros recursos que você deseja cachear
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna o recurso do cache, se disponível
        if (response) {
          return response;
        }
        // Se não estiver no cache, faz uma requisição à rede
        return fetch(event.request);
      })
  );
});