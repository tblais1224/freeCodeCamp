// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.



// function destroyer(arr) {
//     // Remove all the values
//     var newArr = arr;
//     for (var j = 0; j < arr.length; j++) {
//         for (let i = 1; i < arguments.length; i++) {
//             if (arr[j] == arguments[i]) {
//                 newArr.splice(j, 1);
//                 j--;
//             };
//         }
//     }
//     return newArr;
// }

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

const destroyer = (arr, ...args) => arr.filter(element => !args.includes(element))