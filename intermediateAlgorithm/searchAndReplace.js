// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"



// function myReplace(str, before, after) {
//     let capitalCheckAfter = '';

//     if (before[0] === before[0].toUpperCase()) {
//         capitalCheckAfter += after[0].toUpperCase() + after.slice(1);
//     } else {
//         capitalCheckAfter = after;
//     }

//     let output = str.replace(before, capitalCheckAfter);

//     return output;
// }



const myReplace = (str, before, after) => {
    return str.split(" ").map(word => {
        if (word === before) {
            if (checkForCapCase(word)) return after.charAt(0).toUpperCase() + after.slice(1)
            else return after
        }
        return word
    }).join(" ")
}

const checkForCapCase = (word) => {
    if (word[0] === word[0].toUpperCase()) return true
}



console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))