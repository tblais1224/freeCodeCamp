// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("stvwx") should return "u".
// fearNotLetter("bcdf") should return "e".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

const alphabet = "abcdefghijklmnopqrstuvwxyz"

function fearNotLetter(str) {
    let indexOfFirstCharInAlph = alphabet.indexOf(str[0])
    let missingChar = undefined
    for (let i = 0; i < str.length; i++) {
        if(str[i] !== alphabet[i+indexOfFirstCharInAlph]){
            missingChar = alphabet[i+indexOfFirstCharInAlph]
            break
        }
    }
    return missingChar;
  }
  
  fearNotLetter("abce");
  
//completed in 5 minutes
