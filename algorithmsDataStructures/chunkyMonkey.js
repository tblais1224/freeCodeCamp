// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
    var subArrayNum = arr.length / size;
    var output = [];
    var array = arr;

    for (let j = 0; j < subArrayNum; j++) {
        output.push(array.slice(0, size));
        array = array.slice(size);
    }
    return output;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);