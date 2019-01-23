const readlineSync = require("readline-sync");
let num = parseInt(readlineSync.question("How many number "));
let sum = 0;
for (let i=1; i<=num; i++){
    let n = parseInt(readlineSync.question("enter a number "));
    sum += n;
}
console.log("the sum is " + sum);