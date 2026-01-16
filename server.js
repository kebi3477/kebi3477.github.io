// server.js
// load .env first
require('dotenv').config();
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

// --- WebSocket server for TouchDesigner clients ---
// Purpose: provide ws://127.0.0.1:7000 endpoint that receives pose JSON
// from renderer pages (body.html) and broadcasts to connected TD clients.
// Requires dependency: "ws" in package.json
try{
  const WebSocket = require('ws');
  // Attach WebSocket server to the existing HTTP server to use the same port
  // Clients should connect to ws://<host>:<httpPort>/ws
  const wss = new WebSocket.Server({ server, path: '/ws' });
  const serverPort = server.address() && server.address().port ? server.address().port : process.env.PORT || 8089;
  console.log(`WebSocket server available at ws://127.0.0.1:${serverPort}/ws`);

  // OSC forwarder setup
  const osc = require('osc');
  const TD_OSC_PORT = parseInt(process.env.TD_OSC_PORT || '7001', 10);
  const TD_OSC_ADDR = process.env.TD_OSC_ADDR || '127.0.0.1';
  const udpPort = new osc.UDPPort({
    localAddress: '0.0.0.0',
    localPort: 0,
    remoteAddress: TD_OSC_ADDR,
    remotePort: TD_OSC_PORT,
  });
  udpPort.open();
  udpPort.on('ready', ()=> console.log(`OSC UDP port ready -> ${TD_OSC_ADDR}:${TD_OSC_PORT}`));

  wss.on('connection', (ws, req) => {
    console.log('WS client connected', req.socket.remoteAddress);
    ws.on('message', (message) => {
      // messages expected to be JSON strings
      let parsed = null;
      try{ parsed = JSON.parse(message); }catch(e){ /* not JSON */ }
      // If message is a pose payload, broadcast to others
      if(parsed && parsed.type === 'pose'){
        const out = JSON.stringify(parsed);
        // broadcast to other WS clients (if any)
        wss.clients.forEach((client) => {
          if(client !== ws && client.readyState === WebSocket.OPEN){
            client.send(out);
          }
        });
        // send OSC to TouchDesigner
        try{
          const msg = {
            address: '/pose',
            args: [
              { type: 'f', value: Number(parsed.x) || 0.0 },
              { type: 'f', value: Number(parsed.y) || 0.0 },
            ]
          };
          udpPort.send(msg);
          console.log('Forwarded OSC /pose', msg.args.map(a=>a.value));
        }catch(err){ console.error('OSC send error', err); }
      } else {
        // For non-pose messages, just broadcast raw to others
        wss.clients.forEach((client) => {
          if(client !== ws && client.readyState === WebSocket.OPEN){
            client.send(typeof message === 'string' ? message : message.toString());
          }
        });
      }
    });
    ws.on('close', ()=> console.log('WS client disconnected'));
    ws.on('error', (e)=> console.error('WS client error', e));
  });
}catch(e){
  console.error('Failed to start WebSocket server (ws). Is `ws` installed?', e);
}
