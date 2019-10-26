// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function generateFibsArr(lessThanMe) {
    let fibs = [1, 1, 2]
    while (fibs[fibs.length - 1] + fibs[fibs.length - 2] <= lessThanMe) {
        fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2])
    }
    return fibs
}

function sumFibs(lessThanMe) {
    let fibs = generateFibsArr(lessThanMe)
    let sum = 0
    fibs.forEach(fib => {
        if (fib % 2 !== 0) sum += fib
    })
    return sum;
}

sumFibs(4);


// completed in 8 min 30 seconds


sumFibs(1) // should return a number.
sumFibs(1000) // should return 1785.
sumFibs(4000000) // should return 4613732.
sumFibs(4) // should return 5.
sumFibs(75024) // should return 60696.
sumFibs(75025) // should return 135721.