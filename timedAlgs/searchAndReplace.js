// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"


function myReplace(str, before, after) {
    let arr = str.split(" ")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === before) {
            arr[i].toLowerCase() === arr[i] ? arr[i] = after : arr[i] = after[0].toUpperCase() + after.slice(1)
            break;
        }
    }
    console.log(arr.join(' '))
    return arr.join(' ')
    
  }
  
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting")


  // completed in 4 min 30 seconds