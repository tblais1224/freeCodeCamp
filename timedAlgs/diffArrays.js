//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.\


function diffArray(arr1, arr2) {
    var newArr = [];
    arr1.forEach(element => {
        if (!arr2.includes(element)) newArr.push(element)
    });
    arr2.forEach(element => {
        if (!arr1.includes(element)) newArr.push(element)
    });
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



// 1 min 22 seconds