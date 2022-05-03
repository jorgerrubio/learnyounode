'use strict';
const fs = require('fs')

/* const file = fs.readFileSync(process.argv[2]);
const lines = file.toString().split('\n'); */

const file = fs.readFileSync(process.argv[2], 'utf8');
const lines = file.split('\n');

console.log(lines.length - 1);
