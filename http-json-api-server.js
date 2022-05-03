'use strict';
const http = require('http');
const PORT = Number(process.argv[2]) || 3000;

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    if(url.pathname === '/api/parsetime') {
        const date = new Date(url.searchParams.get('iso'));
        const response = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(response));
    }else if(url.pathname === '/api/unixtime') {
        const date = new Date(url.searchParams.get('iso'));
        const response = {
            unixtime: date.getTime()
        };
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(response));
    }
});

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});