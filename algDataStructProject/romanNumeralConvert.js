// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.



// var key = {
//     1: 'I',
//     5: 'V',
//     10: 'X',
//     50: 'L',
//     100: 'C',
//     500: 'D',
//     1000: 'M',
// }

function convertToRoman(num) {

    var keyArr = [
        ['I', 'V'],
        ['X', 'L'],
        ['C', 'D'],
        ['M', 'MM']
    ];
    var convertedString = '';
    var numString = num.toString();
    var digitLength = numString.length;
    for (let i = 0; i < digitLength; i++) {
        var numeral = (digitLength - i) - 1;
        if (parseInt(numString[i]) <= 3) {
            console.log("less than 4")
            for (let j = 0; j < parseInt(numString[i]); j++) {
                convertedString += keyArr[numeral][0]
            }
        } else if (parseInt(numString[i]) === 4) {
            console.log("its 4")
            convertedString += keyArr[numeral][0]
            convertedString += keyArr[numeral][1]
        } else if (parseInt(numString[i]) <= 8) {
            console.log("less than 9")
            for (let j = 0; j < (parseInt(numString[i]) - 4); j++) {
                if (j === 0) {
                    convertedString += keyArr[numeral][1]
                } else {
                    convertedString += keyArr[numeral][0]
                }

            }
        } else if (parseInt(numString[i]) === 9) {
            console.log("its 9")

            convertedString += keyArr[numeral][0]
            convertedString += keyArr[numeral + 1][0]
        } else {
            console.log("error");
        }
    }
    return convertedString;
}

convertToRoman(964);
