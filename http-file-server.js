'use strict';
const http = require('http');
const fs = require('fs');
const port = Number(process.argv[2]) || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const file = fs.readFileSync(process.argv[3], 'utf8');
    res.end(file);
    // fs.createReadStream(process.argv[3]).pipe(res)
});

server.listen(port, () => {
    console.log(`Server listening on ${port}`);
});