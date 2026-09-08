const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const FILE_PATH = path.join('/home/allan/Downloads', 'Simulasi_Ujian_Mandiri_CBT.html');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/cbt' || req.url.startsWith('/?')) {
    fs.readFile(FILE_PATH, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Gagal membaca file CBT: ' + err.message);
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(content);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not Found');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`CBT Server aktif di port ${PORT}`);
});
