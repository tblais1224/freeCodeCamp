// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


function pairElement(str) {
    var outputArr = []
    for (let i = 0; i < str.length; i++) {
        outputArr.push([str[i]])
        if (str[i] == "A") {
            outputArr[i].push("T")
        } else if (str[i] == "T") {
            outputArr[i].push("A")
        } else if (str[i] == "C") {
            outputArr[i].push("G")
        } else {
            outputArr[i].push("C")
        }
    }
    return outputArr;
}

pairElement("GCG");