// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    var newStr = str[0];
    for (var i = 1; i < str.length; i++) {
        if (str[i] == "_" || str[i] == " " || str[i] == "-") {
            newStr += "-" + str[i + 1];
            i++;
        } else if (str[i] == str[i].toUpperCase()) {
            newStr += "-" + str[i];
        } else {
            newStr += str[i];
        }
    };
    newStr = newStr.toLowerCase();
    return newStr;
}

spinalCase("Teletubbies say Eh-oh")