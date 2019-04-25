// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  var rangeArr = [];
  //sorts in ascending order
  arr.sort(function(a,b){return a-b})
  for (let i = arr[0]; i <= arr[1]; i++) {
    rangeArr.push(i);
  }
  for (let i = arr[1]*2; i > 0; i++) {
    var multipleCheck = true;
    for (let j = 0; j < rangeArr.length; j++) {
      if(i % rangeArr[j] !== 0){
        multipleCheck = false
      }
    }
    if (multipleCheck === true) {
      return i;
    }
  }
}
smallestCommons([23, 18]);
