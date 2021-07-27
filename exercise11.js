 function collatz(n){
    var count = 0
    var numList = []
    while (n != 1){
    if (n %2 === 0){
        n /= 2
    }

    else {
       n = (3 * n) + 1
    }
    numList[count] = n
    count++

    for(let i =0; i < numList.length; i++){
        numList[i]
    }
    
}
    console.log(numList)
    return count
 }


console.log(collatz(50))
console.log(collatz(12))