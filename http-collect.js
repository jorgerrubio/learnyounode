'use strict';
const http = require('http');
const url = process.argv[2];

http.get(url, (response) => {
    response.setEncoding('utf8');
    let totalData = '';
    response.on('data', (data) => {
        totalData += data;
    });
    response.on('error', console.error);
    response.on('end', (data) => {
        console.log(totalData.length);
        console.log(totalData);
    });
    
}).on('error', console.error);