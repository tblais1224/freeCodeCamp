// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    for (let i = 1; i < str.length; i++) {
        if(str[i] == str[i].toUpperCase()){
            str[i] = " "+str[i];
        }
    }
    var newStr = str.toLowerCase();
    str = newStr.replace(/ /g, "-");
    // --David St. Hubbins
    return str;
  }
  
  spinalCase("thisIsSpinalTap");