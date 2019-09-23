// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
    var fibNums = [0, 1];
    //push nums to array while last two nums sum is less than or = to num
    do {
        fibNums.push(fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2])
    } while (fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2] <= num);
    var output = 0;
    for (let i = 0; i < fibNums.length; i++) {
        //seperate odd numbers
        if (fibNums[i] / 2 !== parseInt(fibNums[i] / 2)) {
            output += fibNums[i];
        }
    }
    return output;
}

sumFibs(4);