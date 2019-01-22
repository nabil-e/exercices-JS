
function rand10(){
    return parseInt(Math.random()*10);
}
function multiRand(n){
    let arr = []
    for (let i = 0; i<n; i++){
      arr.push(rand10()) 
    }
    return arr
}
console.log(multiRand(5))