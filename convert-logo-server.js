const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/convert-logo.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync(path.join(__dirname, 'public', 'convert-logo.html')));
  } else if (req.method === 'GET' && req.url === '/Logo_PostesNodeste.pdf') {
    res.writeHead(200, { 'Content-Type': 'application/pdf' });
    res.end(fs.readFileSync(path.join(__dirname, 'public', 'Logo_PostesNodeste.pdf')));
  } else if (req.method === 'POST' && req.url === '/save') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const base64Data = body.replace(/^data:image\/png;base64,/, "");
      fs.writeFileSync(path.join(__dirname, 'public', 'Logo_PostesNordeste_logo.png'), base64Data, 'base64');
      console.log('Saved Logo_PostesNordeste_logo.png successfully!');
      res.writeHead(200);
      res.end('OK');
      setTimeout(() => process.exit(0), 500);
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(9876, () => {
  console.log('Server running on port 9876');
  exec(`"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe" --headless --disable-gpu http://localhost:9876/convert-logo.html`);
});
