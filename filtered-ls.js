'use strict';

//Objective: program that prints a list of files in a given directory, filtered by the extension of the files. 

const fs = require('fs');
const path = require('path');

//Sets the file extension
const fileEx = "." + process.argv[3]

function printFiles(pathname) {

    fs.readdir(pathname, function (err, list) {
        if (err) {
            console.log("ERROR: ", err);
        }
        //need to filer the list of files
        list.forEach(function (file) {
            if (path.extname(file) == fileEx) {
                console.log(file);
            }

        })

    })
}

printFiles(process.argv[2]);