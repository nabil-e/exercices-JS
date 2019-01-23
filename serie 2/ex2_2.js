const readlineSync = require("readline-sync");
let min = readlineSync.question("Enter a min number ");
let max = readlineSync.question("Enter a max number ");
if (min>max){
    console.log("Error min is greater than max");
}else{
    let current = readlineSync.question("Enter a current number ");
    if (current>min && current<max){
        console.log("current is between min and max");
    }
}

