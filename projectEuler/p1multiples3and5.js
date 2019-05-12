// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
    var sum = 0;
    var checkDups = []
    for (let i = 1; i < number/3; i++) {
        checkDups.push(i*3)
        sum += i*3
    }
    for (let i = 1; i < number/5; i++) {
        if(checkDups.includes(i*5)){
        }else{
            sum += i*5
        }
    }
    return sum;
}
multiplesOf3and5(49);