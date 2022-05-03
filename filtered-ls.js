'use strict';
const fs = require('fs');
/* const path = require('path'); */

fs.readdir(process.argv[2], (err, list) => {
    if (err) {
        return console.log(err);
    }
    list.forEach(file => {
        if(file.endsWith(`.${process.argv[3]}`)) {
            console.log(file);
        }

        // ejection
        /* if(path.extname(file) === `.${process.argv[3]}`) {
            console.log(file);
        } */
    });
});