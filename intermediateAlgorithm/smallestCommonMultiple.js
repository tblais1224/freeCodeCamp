// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  var rangeArr = [];
  //sorts in ascending order
  arr.sort(function (a, b) {
    return a - b
  });
  for (let i = arr[0]; i <= arr[1]; i++) {
    rangeArr.push(i);
  }
  //multiply the greatest 3 values to get start point for increased efficiency
  var startTestingNum = rangeArr[rangeArr.length-1]*rangeArr[rangeArr.length-2]*rangeArr[rangeArr.length-3];
  for (let i = startTestingNum; i > 0; i += arr[1]) {
    var multipleCheck = true;
    for (let j = rangeArr.length - 2; j >= 0; j--) {
      if (i % rangeArr[j] !== 0) {
        multipleCheck = false;
        j = 0;
      }
    }
    if (multipleCheck === true) {
      return i;
    }
  }
}
smallestCommons([23, 18]);