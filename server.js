// server.js
const express = require('express');
const path = require('path');
const app = express();

const ROOT = __dirname;

console.log(`Serving from ROOT: ${ROOT}`);

app.use(express.static(ROOT, {
  index: 'index.html',
  extensions: ['html'],
  etag: false,
  cacheControl: false,
  maxAge: 0,
}));

app.get('/', (_req, res) => {
  res.sendFile(path.join(ROOT, 'index.html'));
});

app.get('/eye', (_req, res) => {
  res.sendFile(path.join(ROOT, 'eye.html'));
});

app.get('/body', (_req, res) => {
  res.sendFile(path.join(ROOT, 'body.html'));
});


app.get('/healthz', (_req, res) => res.status(200).send('ok'));

const PORT = process.env.PORT || 8089;
const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 에서 실행 중`);
});

server.on('error', (e) => {
  console.error('Server error:', e);
});
process.on('uncaughtException', (e) => {
  console.error('Uncaught:', e);
});
process.on('unhandledRejection', (e) => {
  console.error('UnhandledRejection:', e);
});
