function average(arr){
    let sum = 0
    for (let i=0; i<arr.length; i++){
        sum += arr[i]
    }return (sum/arr.length)
}

function min(arr){
    let mi = arr[0]
    for (let i=0; i<arr.length; i++){
        if (mi>arr[i]){
            mi = arr[i]
        }
    }return mi
}

function max(arr){
    let ma = arr[0]
    for (let i=0; i<arr.length; i++){
        if (ma<arr[i]){
            ma = arr[i]
        }
    }return ma
}
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
arr = multiRand(10)
console.log(`the max of arr: ${max(arr)}, the min of arr: ${min(arr)} and the average: ${average(arr)}`)