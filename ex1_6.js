const readlineSync = require("readline-sync");
let num_1 = readlineSync.question("what's your first number ");
let num_2 = readlineSync.question("what's your second number ");
console.log(parseInt(num_1)%parseInt(num_2));
