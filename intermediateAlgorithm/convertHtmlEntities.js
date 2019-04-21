// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    // &colon;&rpar;
    var output = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '&') {
            output += '&amp;';
        } else if (str[i] == '<') {
            output += '&lt;'
        } else if (str[i] == '>') {
            output += '&gt;'
        } else if (str[i] == '"') {
            output += '&quot;'
        } else if (str[i] == "'") {
            output += '&apos;'
        } else {
            output += str[i];
        }
    }
    return output;
}

convertHTML("Dolce & Gabbana");