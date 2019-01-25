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
    get surface(){
        return this.width * this.lenght
    }
}

let rect1 = new Rectangle(5,5,50,50)
let rect2 = new Rectangle(20,10,10,10)
console.log(rect1.collides(rect2))