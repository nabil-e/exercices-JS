class Circle{
    constructor(xPos, yPos, radius){
        this.xPos = xPos
        this.yPos = yPos
        this.radius = radius
    }
    move(xOffset, yOffset){
        this.xPos = xOffset 
        this.yPos = yOffset
    }
    get surface(){
        return Math.PI*(Math.pow(this.radius, 2))
    }
}

let c = new Circle(6,3,11)
//c.move(9,9)
console.log(c.surface)