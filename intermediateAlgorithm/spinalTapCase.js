// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// function spinalCase(str) {
//     var newStr = str[0];
//     for (var i = 1; i < str.length; i++) {
//         if (str[i] == "_" || str[i] == " " || str[i] == "-") {
//             newStr += "-" + str[i + 1];
//             i++;
//         } else if (str[i] == str[i].toUpperCase()) {
//             newStr += "-" + str[i];
//         } else {
//             newStr += str[i];
//         }
//     };
//     newStr = newStr.toLowerCase();
//     return newStr;
// }


// use regex to insert whitespace between instances of lowercase followed by uppercase, then replace whitespace and _ with -, then make all lowercase
const spinalCase = (str) => str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_|\s+/g, '-').toLowerCase()

console.log(spinalCase("TeletubbiesSay_Eh-oh"))
