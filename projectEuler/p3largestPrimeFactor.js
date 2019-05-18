// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?


function largestPrimeFactor(number) {
    let output = 0
    if (number === 2 || number === 3 || number === 5 || number === 7 || number === 11 || number === 13 || number === 17 || number === 19) {
        return number
    }
    let prime = 2
    while(prime <= number){
        if(number%prime === 0){
            number = number/prime
            output = prime
        }
        else prime++
    }
return output
}

largestPrimeFactor(600851475143);