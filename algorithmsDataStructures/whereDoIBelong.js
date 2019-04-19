// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  if(arr.length == 0){
      return 0;
  }

  var sortedArr = arr;
  sortedArr.sort(function(a,b){ //Array now becomes ascending order
    return a - b
})

  if (sortedArr[0] == num || sortedArr[0] > num ) {
    return 0;
  } else if (num > sortedArr[sortedArr.length - 1]) {
    return sortedArr.length;
  } else {
    for (let i = 0; i < sortedArr.length; i++) {
      if (num > sortedArr[i - 1] && num <= sortedArr[i]) {
        return i;
      }
    }
  }
}
getIndexToIns([3, 10, 5], 3);
