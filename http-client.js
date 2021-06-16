'use strict';

const http = require('http');

function httpRequest (url) {
    http.get(url, function(response) {
        response.setEncoding('utf8'); //removes the buffer, converts to strings
        response.on('data', function(data) {
            console.log(data);
        })
    })
}

httpRequest(process.argv[2]);