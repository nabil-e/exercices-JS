const readlineSync = require("readline-sync");
let shoeSize = readlineSync.question("what's your shoe size ");
let birthYear = readlineSync.question("what's your birth year ");
console.log((((parseFloat(shoeSize)*2)+5)*50)-parseInt(birthYear)+1766);
