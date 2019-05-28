// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

function largestPalindromeProduct(n) {
  let digits = n
  //creates a string of the number of digits of 9's to set the highest num
  let highNumString = ""
  for (let i = 0; i < digits; i++) {
    highNumString += "9"
  }
  //change highnum to a number
  let highNum = parseInt(highNumString)
  //empty output variable
  var output = 0

  //start with i the same as high num
  for (let i = highNum; i > 0; i--) {
    // product of the high number and i
    var product = highNum * i

    //test if the high number and i are the same and if the product of them is less than the output value. if true the output can be returned because it has to be the highest possible product
    if (i === highNum && product < output) {
      return output
    }
    //if the output value is more than the product value subtract one from the high number and reset i to one more then the high number so the next iteration will subtract one from i and it will equal the high num
    else if (output >= product) {
      highNum--
      i = highNum + 1
    } else {
      //change the product to a string
      var productStr = product.toString()
      //empty string to store the reversed product
      var reverseProdStr = ""
      //iterate through productstring and add the chars from last to first into the reversed string
      for (let j = 1; j <= productStr.length; j++) {
        reverseProdStr += productStr[productStr.length - j]
      }
      //if the reverse string and normal string are the same set it to the output
      if (productStr === reverseProdStr) {
        output = product
      }
    }
  }
}

largestPalindromeProduct(2);