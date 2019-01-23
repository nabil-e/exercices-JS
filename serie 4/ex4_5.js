function calcDistance(x1,x2,y1,y2){
    console.log(x1,x2,y1,y2)
    
    return Math.sqrt((Math.pow((x1-y1),2))+(Math.pow((x2-y2),2)))
}
console.log(calcDistance(3,2,9,7))