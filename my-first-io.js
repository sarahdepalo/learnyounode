'use strict';

const fs = require('fs');

function readFile(filename) {
    const buffer = fs.readFileSync(filename);
    const content = buffer.toString();
    let newlines = content.split('\n').length - 1; // gets rid of the extra element
    console.log(newlines);

}

readFile(process.argv[2]);