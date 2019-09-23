// Project Euler: Problem 5: Smallest multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

function smallestMult(n) {

  //split 1 to n into array
  const makeArr = (function(num) {
    let array = [];
    for (let i = 1; i <= num; i++) {
      array.push(i);
    }
    return array;
  })(n);

  
  //find prime multiples of each num in arr
  const primeMult = (function(arr) {
    let newArr = arr;
    //removes 1
    if (newArr[0] === 1) {
      newArr = newArr.slice(1);
    }
    let nestArr = [];
    newArr.forEach(num => {
      if (num === 2) {
        nestArr.push([2]);
      } else {
        let newNum = num;
        nestArr.push([]);
        for (let i = 2; i <= newNum; i++) {
          let primeCheck = false;
          if (newNum % i === 0) {
            primeCheck = true;
            for (let j = 2; j < i; j++) {
              if (i % j === 0) {
                primeCheck = false;
              }
            }
          }
          if (primeCheck === true) {
            nestArr[newArr.indexOf(num)].push(i);
            newNum = newNum / i;
            i = 1;
          }
        }
      }
    });
    return nestArr;
  })(makeArr);


  //filter out highest occurance of each multiple in array
  const objVals = (function(primeMult) {
    const checkMostCommon = {};
    primeMult.forEach(arr => {
      for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let product = num;
        let testi = i + 1;
        while (num === arr[testi]) {
          product *= num;
          testi++;
        }
        if (!checkMostCommon[num] || checkMostCommon[num] < product) {
          checkMostCommon[num] = product;
        }
      }
    });
    return checkMostCommon;
  })(primeMult);


  let output = 1;
  Object.keys(objVals).forEach(num => (output *= objVals[num]));
  console.log(output);
  return output;
}

smallestMult(6);
