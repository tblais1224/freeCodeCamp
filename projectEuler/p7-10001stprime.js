// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the nth prime number?

function nthPrime(n) {
    var primes = [2, 3, 5, 7, 11, 13]
    var testNum = 15;
    var test = true;
    while (primes.length < n) {
        for (let i = 0; primes[i] <= Math.sqrt(testNum); i++) {
            if (testNum % primes[i] === 0) {
                test = false
                break;
            }
        }
        if (test === true) {
            primes.push(testNum)
            testNum += 2
        } else {
            test = true
            testNum += 2
        }
    }
    return primes[primes.length - 1]
}

nthPrime(10);

// while (primes.length < n) {

//     if (testNumFun(testNum, primes) === true) {
//         primes.push(testNum)
//         testNum+=2
//     } else {
//         testNum+=2
//     }
// }
// return primes[primes.length-1]
// }

// function testNumFun(num, primes) {
// var newPrimes = []
// for (let i = 0; i < primes.length; i++) {
//     if (primes[i] <= Math.sqrt(num)) {
//         newPrimes.push(primes[i])
//     }else{i = primes.length}
// }

// for (let i = 1; i < newPrimes.length; i++) {
//     if (num % primes[i] === 0) {
//         return
//     }
// }