function askTvSerie(){
    const readlineSync = require("readline-sync")
    let serie = {}
    serie.name = readlineSync.question("What's your serie name? ")
    serie.productionYear =  readlineSync.question("What's your serie product year? ")
    serie.nameOfCastMembers = []
    let c = "y"
    while(c !== "n"){
        serie.nameOfCastMembers.push(readlineSync.question("What's Names of the cast members? "))
        c = readlineSync.question("do you still want to enter a members y/n ")
    }
    return serie
}

function randomizeCast(){
    tvSerie = askTvSerie()
    randomList = []
    len = tvSerie.nameOfCastMembers.length
    index = Math.floor(Math.random() * len)
    for (len; len>0; len--){
        randomList.push(tvSerie.nameOfCastMembers.pop(index))
    }
    return randomList
}
console.log(randomizeCast())
