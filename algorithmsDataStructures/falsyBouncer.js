//falsy bouncer

//Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    var newArr = arr;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == false || arr[i] == null || Number.isNaN(arr[i])){
            newArr.splice(i, 1);
            i--;
        }
    }
    return newArr;
  }
  
  bouncer([false, null, 0, NaN, undefined, ""])