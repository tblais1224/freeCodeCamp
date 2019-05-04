// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

// var key = {1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M'}

function convertToRoman(num) {
//roman numeral key
    var keyArr = [
        ['I', 'V'],
        ['X', 'L'],
        ['C', 'D'],
        ['M', 'MM']
    ];

    //output placeholder string
    var convertedString = '';
    //convert num to a string so # of digits can be found
    var numString = num.toString();
   
    //loop through each digit
    for (let i = 0; i < numString.length; i++) {

        //numeral sets the index for the table in comparison to the number of digits
        // 1000's sets index to 3, 100's to 2, etc.
        var numeral = (numString.length - i) - 1;

        //change the digit string back to a number
        var digit = parseInt(numString[i]);
        
        //gets the first roman numeral (0+) and the 2nd (5+) for the correct numeral
        var keyArrZero = keyArr[numeral][0];
        var keyArrOne = keyArr[numeral][1]

        //checks if digit is 3 or less ex.(3 = III)
        if (digit <= 3) {

            //loops through the digit and concats roman numeral to output string
            for (let j = 0; j < digit; j++) {
                convertedString += keyArrZero
            }

            //if 4 concats the zero index roman numeral and the first index numeral ex(4 = 'IV')
        } else if (digit === 4) {

            convertedString += keyArrZero
            convertedString += keyArrOne

            //checks if digit is 8 or less ex.(8 = VIII)
        } else if (digit <= 8) {

            //loops through the (digit-4) and adds the first index numeral first then the zero index for each loop following   ex.(7 = 'VII')
            for (let j = 0; j < (digit - 4); j++) {
                if (j === 0) {
                    convertedString += keyArrOne
                } else {
                    convertedString += keyArrZero
                }
            }

            //checks if digit is 9 and adds the zero index numeral and then the zero index numeral of the index +1 current index    ex(90 = 'XC')
        } else if (digit === 9) {
            convertedString += keyArrZero
            convertedString += keyArr[numeral + 1][0]
        } else {
            console.log("error");
        }
    }
    return convertedString;
}

convertToRoman(98);
