// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.


// function diffArray(arr1, arr2) {
//     var newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.includes(arr1[i])){
//         }else{
//             newArr.push(arr1[i])
//         }
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         if (arr1.includes(arr2[i])){
//         }else{
//             newArr.push(arr2[i])
//         }
//     }
//     return newArr;
//   }

//   diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// refactored and completed
const diffArray = (arr1, arr2) => CheckArrays(arr1, arr2).concat(CheckArrays(arr2, arr1))
const CheckArrays = (arr1, arr2) => arr1.filter(element => !arr2.includes(element))



diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])