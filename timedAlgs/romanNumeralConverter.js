// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

// character	numerical value
// I	            1
// V	            5
// X	            10
// L	            50
// C	            100
// D	            500
// M	            1000

const RomanNums = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000,
}

function convertToRoman(num) {
    const Roman = Object.keys(RomanNums)
    let output = ""
    for (let i = Roman.length - 1; i >= 0; i--) {
        if(num / RomanNums[Roman[i]] >= 1){
            if (num.toString()[0] === "4") {
                output += (Roman[i] + Roman[i+1])
                num -= (RomanNums[Roman[i+1]] - RomanNums[Roman[i]])
            }else if (num.toString()[0] === "9") {
                output += (Roman[i-1] + Roman[i+1])
                num -= (RomanNums[Roman[i+1]] - RomanNums[Roman[i-1]])
            } else {
                output += Roman[i]
                num -= RomanNums[Roman[i]]
                i++
            }
        }
        if (num <= 3 || num === 0) {
            for (let j = 0; j < num; j++) {
                output += Roman[0]
            }
            console.log(output)
            return output
        }
    }
}


// completed in 38 minutes


   
//   convertToRoman(2) // should return "II".
//   convertToRoman(3) // should return "III".
//   convertToRoman(4) // should return "IV".
//   convertToRoman(5) // should return "V".
   convertToRoman(9) // should return "IX".
//   convertToRoman(12) // should return "XII".
//   convertToRoman(16) // should return "XVI".
   convertToRoman(29) // should return "XXIX".
//   convertToRoman(44) // should return "XLIV".
//   convertToRoman(45) // should return "XLV"
//   convertToRoman(68) // should return "LXVIII"
   convertToRoman(83) // should return "LXXXIII"
   convertToRoman(97) // should return "XCVII"
   convertToRoman(99) // should return "XCIX"
//   convertToRoman(400) // should return "CD"
//   convertToRoman(500) // should return "D"
//   convertToRoman(501) // should return "DI"
   convertToRoman(649) // should return "DCXLIX"
   convertToRoman(798) // should return "DCCXCVIII"
   convertToRoman(891) // should return "DCCCXCI"
 //  convertToRoman(1000) // should return "M"
//   convertToRoman(1004) // should return "MIV"
//   convertToRoman(1006) // should return "MVI"
//   convertToRoman(1023) // should return "MXXIII"
//   convertToRoman(2014) // should return "MMXIV"
   convertToRoman(3999) // should return "MMMCMXCIX"   