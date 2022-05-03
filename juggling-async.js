'use strict';
const http = require('http');
const urls = process.argv.slice(2);
let count = 0;
let data = [];

urls.forEach((url, index) => {
    data[index] = '';
    http.get(url, (response) => {
        response.setEncoding('utf8');
        response.on('data', (chunk) => {
            data[index] += chunk;
        });
        response.on('error', console.error);
        response.on('end', () => {
            count++;
            if (count === urls.length) {
                data.forEach((chunk) => {
                    console.log(chunk);
                });
            }
        });
    }).on('error', console.error);
});