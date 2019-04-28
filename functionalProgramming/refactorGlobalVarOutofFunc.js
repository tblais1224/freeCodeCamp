// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// New parameters should come before the bookName one

// Add your code below this line
function add (bookList, bookName) {
  var addedBookList = bookList.push(bookName);
  return addedBookList;
  
  // Add your code above this line
}

// New parameters should come before the bookName one

// Add your code below this line
function remove (bookList, bookName) {
  if (bookList.indexOf(bookName) >= 0) {
    var newArray = bookList.splice(0, 1, bookName);
    return newArray;
    
    // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);