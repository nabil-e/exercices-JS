class Rectangle{
    constructor(topLeftXPos, topLeftYPos, width, lenght){
        this.topLeftXPos = topLeftXPos
        this.topLeftYPos = topLeftYPos
        this.width = width
        this.lenght = lenght

    }
    collides(otherRectangle){
        if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
            this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
            this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.lenght &&
            this.lenght + this.topLeftYPos > otherRectangle.topLeftYPos) {
            // collision détectée !
            return true
        }else
            return false
    }
}
function randomInt(n){
    return Math.floor(Math.random() * n)
}

function generateRandomInstance(x){
    list = []
    for (let i = 0; i < x; i++){
                list.push(new Rectangle(randomInt(50), randomInt(50), randomInt(10), randomInt(10)))
    }
    return list
}
function verifCollides(nbrRect){
    let newList = []
    let liste = generateRandomInstance(nbrRect)
    for (let i of liste){
        for (let j of liste){
            if (i.collides(j) == true){
                if(newList.includes(i)){
                    continue
                }else{
                    newList.push(i)
                }   
            }
        }
     
    }return newList 
}


console.log("newliste = ",verifCollides(10))