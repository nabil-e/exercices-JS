const readlineSync = require("readline-sync");
console.log("We have 3 questions ");
let name = readlineSync.question("1. What's your name? ");
let favoriteFood = readlineSync.question("2. What's your favorite food? ");
let hobbie = readlineSync.question("3. What's your hobbie? ");
console.log("Hello "+ name+" you like " + hobbie + " and your favorite food is "+ favoriteFood);
