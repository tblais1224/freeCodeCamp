// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

// function whatIsInAName(collection, source) {
//     // What's in a name?
//     var arr = [];
//     // Only change code below this line

//     var keyArray = Object.keys(source);

//     for (let i = 0; i < collection.length; i++) {
//         var checker = true;
//         for (let j = 0; j < keyArray.length; j++) {
//             if (source[keyArray[j]] !== collection[i][keyArray[j]]) {
//                 checker = false;
//             }
//         }
//         if (checker === true) {
//             arr.push(collection[i])
//         }
//     }
//     // Only change code above this line
//     return arr;
// }


//use keys.every()



const whatIsInAName = (collection, source) => collection.filter(obj => checkObjectForKeyValue(obj, source))

const checkObjectForKeyValue = (obj, source) => {
    let check = true;
    Object.keys(source).forEach(key => {
        if (source[key] !== obj[key]) check = false
    })
    return check
}



whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
});