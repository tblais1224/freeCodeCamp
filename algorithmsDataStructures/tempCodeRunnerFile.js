function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var sortedArr = arr.sort();
  if (sortedArr[0] > num || sortedArr == []) {
    return 0;
  } else if (num > sortedArr[sortedArr.length - 1]) {
    return sortedArr.length;
  } else {
    for (let i = 0; i < sortedArr.length; i++) {
      if (num > sortedArr[i - 1] && num <= sortedArr[i]) {
        var checkDup = sortedArr[i - 1];
        var output = i;
        console.log(i);
        for (var j = i; j < sortedArr.length; i++) {
          if (checkDup == sortedArr[j]) {
            output++;
          }
        }
        return output;
      }
    }
  }
}
getIndexToIns([5, 3, 20, 3], 5);