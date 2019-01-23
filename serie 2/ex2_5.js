const readlineSync = require("readline-sync");
let num
while (num !== 42){
    num = parseInt(readlineSync.question("What's your number "))
    if (num !== 42){
    console.log("Are you sure!!!")
    }
}