// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.


// function translatePigLatin(str) {
//     var tempString = '';
//     var output = '';

//     if (str[0] == 'a' || str[0] == 'e' || str[0] == 'i' || str[0] == 'o' || str[0] == 'u') {

//         output = str + "way";
//         return output;

//     } else {

//         for (let i = 0; i < str.length; i++) {

//             if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {

//                 output += str.slice(i) + tempString + "ay"
//                 return output;

//             } else {
//                 tempString += str[i];
//             }
//         }
//         return tempString + "ay";
//     }
// }



const vowels = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u"
}

const translatePigLatin = (string) => {
    if (vowels[string[0]]) return string += "way"
    for (let index = 1; index < string.length; index++) {
        if (vowels[string[index]]) return string.substring(index) + string.substring(0, index) + "ay"
    }
    return string + "ay"
}

console.log(translatePigLatin("consonant"));