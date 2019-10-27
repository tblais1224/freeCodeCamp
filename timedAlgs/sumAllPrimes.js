// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.


function sumPrimes(num) {
    let primes = [2]
    for (let i = 3; i <= num; i += 2) {
        let primeCheck = true
        for (let j = 0; j < primes.length; j++) {
            if (i % primes[j] === 0) {
                primeCheck = false
                break;
            }
        }
        if (primeCheck) {
            primes.push(i)
        }
    }
    return primes.reduce((a,b) => a + b, 0);
}

sumPrimes(10);

//completed in 6min


sumPrimes(10) // should return a number.
sumPrimes(10) // should return 17.
sumPrimes(977) // should return 73156.