'use strict';
const http = require('http');
const map = require('through2-map')
const port = Number(process.argv[2]) || 3000;

const server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        return res.end('send me a POST\n')
    }

    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res)
    /* let body = '';
    req.on('data', (data) => {
        body += data;
    });
    req.on('end', () => {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end(body.toUpperCase());
    }); */
});

server.listen(port, () => {
    console.log(`Server listening on ${port}`);
});