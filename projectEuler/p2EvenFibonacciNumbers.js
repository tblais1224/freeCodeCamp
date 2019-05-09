// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed nth term, find the sum of the even-valued terms.


function fiboEvenSum(n) {
    // You can do it!
    var fibonacciNums = [1,2];
    var sum = 0;
    while (fibonacciNums.length <= n) {
        fibonacciNums.push(fibonacciNums[fibonacciNums.length-1] + fibonacciNums[fibonacciNums.length-2]);
    }
    fibonacciNums.forEach(element => {
        if(element % 2 === 0){
            sum += element;
        }
    });
    return sum;
  }
  
  fiboEvenSum(10);