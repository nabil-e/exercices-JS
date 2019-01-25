
function askTvSerie(){
    const readlineSync = require("readline-sync")
    let serie = {}
    serie.name = readlineSync.question("What's your serie name? ")
    serie.productionYear =  readlineSync.question("What's your serie product year? ")
    serie.nameOfCastMembers = []
    let c = "y"
    while(c !== "n"){
        serie.nameOfCastMembers.push(readlineSync.question("What's Names of the cast members? "))
        c = readlineSync.question("do you still want to enter an element y/n ")
    }
    objOrJson = readlineSync.question("would you a object or a json file (type 'o' or 'j'): ")
    if (objOrJson == "o"){
        return serie
    }else if (objOrJson == "j"){
        // transform object to a string
        let serieJson = JSON.stringify(serie)
        let fs = require('fs');
        // write a json in file
        fs.writeFileSync("./serie.json", serieJson, "utf8")
    }
    
}

console.log(askTvSerie())
