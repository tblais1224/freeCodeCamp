// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.


function telephoneCheck(str) {
    let nums = "1234567890"
    let countNums = 0
    let noSpaces = ""
    for (let i = 0; i < str.length; i++) {
        if (nums.includes(str[i])) countNums++;
        if (str[i] === " ") continue;
        else noSpaces += str[i]
    }
    if (countNums === 11 && str[0] !== "1") return false;
    if (countNums === 11 && str[0] === "1") noSpaces = noSpaces.slice(1)
    if (countNums > 11 || countNums < 10) return false;
    if (noSpaces[0] === "(" && noSpaces[4]!==")") return false;
    
    for (let i = 0; i < noSpaces.length; i++) {
        if (i === 0 && noSpaces[i] === "(") continue;
        else if (i === 4 && noSpaces[i] === ")")continue;
        else if (noSpaces[i] === "-" && nums.includes(noSpaces[i-1]) && nums.includes(noSpaces[i+1])) continue;
        else if (!nums.includes(noSpaces[i]))return false;
    }

    return true;
  }
  
// completed in 40 minutes, i would like to refactor this to use regex and not if statements but for speed i did not look up regex


telephoneCheck("555-555-5555") // should return a boolean.
telephoneCheck("1 555-555-5555") // should return true.
telephoneCheck("1 (555) 555-5555") // should return true.
telephoneCheck("5555555555") // should return true.
telephoneCheck("555-555-5555") // should return true.
telephoneCheck("(555)555-5555") // should return true.
telephoneCheck("1(555)555-5555") // should return true.
telephoneCheck("555-5555") // should return false.
telephoneCheck("5555555") // should return false.
telephoneCheck("1 555)555-5555") // should return false.
telephoneCheck("1 555 555 5555") // should return true.
telephoneCheck("1 456 789 4444") // should return true.
telephoneCheck("123**&!!asdf#") // should return false.
telephoneCheck("55555555") // should return false.
telephoneCheck("(6054756961)") // should return false
telephoneCheck("2 (757) 622-7382") // should return false.
telephoneCheck("0 (757) 622-7382") // should return false.
telephoneCheck("-1 (757) 622-7382") // should return false
telephoneCheck("2 757 622-7382") // should return false.
telephoneCheck("10 (757) 622-7382") // should return false.
telephoneCheck("27576227382") // should return false.
telephoneCheck("(275)76227382") // should return false.
telephoneCheck("2(757)6227382") // should return false.
telephoneCheck("2(757)622-7382") // should return false.
telephoneCheck("555)-555-5555") // should return false.
telephoneCheck("(555-555-5555") // should return false.
telephoneCheck("(555)5(55?)-5555") // should return false.