function factorial(a){
    sum = 1
    for (let i = 1; i<=a; i++){
        sum *= i
    }return sum

}
console.log(factorial(5))