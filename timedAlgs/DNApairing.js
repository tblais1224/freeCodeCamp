// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

const pairs = {
    G: "C",
    C: "G",
    A: "T",
    T: "A"
}

function pairElement(str) {
    let result = []
    for (let i = 0; i < str.length; i++) {
        result.push([str[i], pairs[str[i]]])
    }

    return result;
}

pairElement("GCG");


// completed in 3 minutes