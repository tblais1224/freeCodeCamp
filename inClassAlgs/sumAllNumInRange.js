// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.


const sumAll = (arr) => {
    let result = 0
    if (arr[1] >= arr[0]) {
        for (let i = arr[0]; i <= arr[1]; i++) {
            result += i
        }
    } else {
        for (let i = arr[1]; i <= arr[0]; i++) {
            result += i
        }
    }

    return result
}
console.log(sumAll([4, 1]))


// 1 min 45 seconds