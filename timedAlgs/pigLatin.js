// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// If a word does not contain a vowel, just add "ay" to the end.

// Input strings are guaranteed to be English words in all lowercase.

// aeiou

const vowels = ['a', 'e', 'i', 'o', 'u'];

function translatePigLatin(str) {
  var newStr;
  for (let i = 0; i < str.length; i++) {
    console.log(str[i],vowels.includes(str[i]))

    if (vowels.includes(str[i]) && i === 0) {
      newStr = str + "way";
      break
    } else if (vowels.includes(str[i])) {
      newStr = str.slice(i) + str.slice(0, i) + "ay";
      break
    } else if (i === str.length - 1) {
      newStr = str + "ay";
    }
  }
  console.log(newStr)
  return newStr;
}

translatePigLatin("consonant");

//translatePigLatin("california") should return "aliforniacay".


// completed in ten min