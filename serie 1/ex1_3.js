const readlineSync = require("readline-sync");
let userName = readlineSync.question("What's your name? ");
console.log("Hello " + userName);
