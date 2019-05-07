/*Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.*/


function telephoneCheck(str) {
  var newStr = str.replace(/ /g, '');
  if (newStr[0] === '1') {
    newStr = newStr.slice(1);
  }
  if (newStr[0] === '(' && newStr[4] === ')') {
    newStr = newStr.substr(1, 3) + newStr.substr(5)
  }
  if (newStr[3] === '-') {
    newStr = newStr.substr(0, 3) + newStr.substr(4)
  }
  if (newStr[6] === '-') {
    newStr = newStr.substr(0, 6) + newStr.substr(7)
  }
  
  if (newStr.length === 10 && isNaN(newStr) === false) {
    return true
  } else {
    return false
  }
}

telephoneCheck("1(555)555-5555")