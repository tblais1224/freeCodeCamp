// Project Euler: Problem 6: Sum square difference

// The sum of the squares of the first ten natural numbers is,
// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

// sumSquareDifference(10) should return 2640.
// sumSquareDifference(20) should return 41230.
// sumSquareDifference(100) should return 25164150.


const sumOfSquares = (num) => (num * (num + 1) * (2 * num + 1) / 6)

const squareOfSum = (num) => (num * (num + 1) / 2) * (num * (num + 1) / 2)

const sumSquareDifference = (n) => squareOfSum(n) - sumOfSquares(n)

sumSquareDifference(100);