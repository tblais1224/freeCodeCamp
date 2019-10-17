// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.


// function sumPrimes(num) {
//     var primes = [2];
//     if (num === 2) {
//         return 2;
//     } else if (num < 2) {
//         return 0;
//     }
//     for (let i = 3; i <= num; i++) {
//         var checkPrime = true;
//         for (let j = 0; j < primes.length; j++) {
//             if (i % primes[j] === 0){
//                 checkPrime = false;
//             }
//         }
//         if (checkPrime === true) {
//             primes.push(i)
//         }
//     }
//     var output = 0;
//     primes.forEach(element => {
//         output += element;
//     });
//     return output;
// }

const getPrimes = (maxPrime) => {
    let primes = [2]
    for (let i = 3; i <= maxPrime; i += 2) {
        if (primes.filter(prime => i % prime !== 0).length === primes.length) primes.push(i)
    }
    return primes
}

const sumPrimes = (maxPrime) => getPrimes(maxPrime).reduce((a, b) => a + b, 0)

console.log(sumPrimes(977))