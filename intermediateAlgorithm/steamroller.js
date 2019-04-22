// Flatten a nested array. You must account for varying levels of nesting.


function steamrollArray(arr) {
    // I'm a steamroller, baby
    var string = arr.toString();
    var newArr = string.split(",")
    for (let i = 0; i < newArr.length; i++) {
      if(Number.isInteger(parseInt(newArr[i]))){
        newArr[i] = parseInt(newArr[i])
      }else if(newArr[i] == '[object Object]'){
        newArr[i] = {};
      }else if (newArr[i] == '') {
        newArr.splice(i,1)
        i--;
      }

    }
    return newArr;

  }
  steamrollArray([1, [], [3, [[4]]]])