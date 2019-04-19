// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.



function sumAll(arr) {
    if (arr[0] == arr[1]) {
        return arr[0] * 2;
    }
    var sum = arr[0] + arr[1];
    if (arr[0] < arr[1]) {
        for (let i = arr[0]+1; i < arr[1]; i++) {
            sum += i;
        }
    } else {
        for (let i = arr[1]+1; i < arr[0]; i++) {
            sum += i;
        }
    }
    return sum;
}

sumAll([10, 5]);