// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.


function sumPrimes(num) {
    var primes = [2, 3, 5, 7, 11, 13, 17, 19]
    var output = 0;
    if (num < 23) {
        for (let i = 0; i <= num; i++) {
            if (primes[i] > num) {
                return output;
            } else {
                output += primes[i];
            }
        }
        return output;
    } else {
        for (let i = 23; i <= num; i + 2) {
            var primeCheck = true;
            for (let j = 0; j < primes.length; j++) {
                if (i % primes[j] == 0) {
                    primeCheck = false;
                }
            }
            if (primeCheck === true) {
                primes.push(i);
            }
        }
        primes.forEach(element => {
            output += element;
        });
        return output;
    }
}

sumPrimes(31)