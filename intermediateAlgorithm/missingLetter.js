// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  var abc = "abcdefghijklmnopqrstuvwxyz";
  var firstChar = abc.indexOf(str[0]);
  var lastChar = abc.indexOf(str[str.length - 1]);
  var testString = abc.slice(firstChar, lastChar);
  for (let i = 0; i < testString.length; i++) {
    if (str.includes(testString[i]) == false) {
      return testString[i];
    }
  }
}

fearNotLetter("abce");
