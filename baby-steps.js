'use strict';

// Everything starting at index 2 are your command line arguements. The first two are just file paths.

let total = 0; //needs to be outside of the for loop

for (let i = 2; i < process.argv.length; i++) { // Used a for loop because we had to start at [2]
    total += Number(process.argv[i]); //converts to a number
  
}

console.log(total);