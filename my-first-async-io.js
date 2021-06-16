'use strict';

const fs = require('fs');

function read (fileName) {
    fs.readFile(fileName, function (err, buffer) {
        if (err) {
            console.log("ERROR: ", err.message);
        }
        const content = buffer.toString();
        let newLines = content.split('\n').length - 1;
        console.log(newLines);
    })
    
}

read(process.argv[2]);


