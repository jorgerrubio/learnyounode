'use strict';
const http = require('http');
const bl = require('bl');
const urls = process.argv.slice(2);

let count = 0;
let results = [];

urls.forEach((url, index) => {
    http.get(url, (response) => {
        response.pipe(bl((err, data) => {
            if (err) {
                return console.error(err);
            }
            results[index] = data.toString();
            count++;
            if (count === urls.length) {
                results.forEach((result) => {
                    console.log(result);
                });
            }
        }));
    }).on('error', console.error);
});