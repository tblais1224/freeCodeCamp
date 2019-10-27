// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.


function smallestCommons(arr) {
    let smallestMult = 0
    let range = []
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        range.push(i)
    }

    while (true) {
        smallestMult += range[range.length - 1]
        let check = false
        for (let i = 0; i < range.length; i++) {
            if (smallestMult%range[i] !== 0) {
                break
            }
            if (i === range.length -1) {
                check = true
            }
        }
        if (check) {
            break
        }
    }
    console.log(smallestMult)
    return smallestMult;
}


smallestCommons([1, 5]);

// completed in 8 minutes


smallestCommons([1, 5]) // should return a number.
smallestCommons([1, 5]) // should return 60.
smallestCommons([5, 1]) // should return 60.
smallestCommons([2, 10]) // should return 2520.
smallestCommons([1, 13]) // should return 360360.
smallestCommons([23, 18]) // should return 6056820.