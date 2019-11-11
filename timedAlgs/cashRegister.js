// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function // should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

const numberOfCoinsInDrawer = {
  "PENNY": {
    value: 0.01,
    amount: 0
  },
  "NICKEL": {
    value: 0.05,
    amount: 0
  },
  "DIME": {
    value: 0.10,
    amount: 0
  },
  "QUARTER": {
    value: 0.25,
    amount: 0
  },
  "ONE": {
    value: 1,
    amount: 0
  },
  "FIVE": {
    value: 5,
    amount: 0
  },
  "TEN": {
    value: 10,
    amount: 0
  },
  "TWENTY": {
    value: 20,
    amount: 0
  },
  "ONE HUNDRED": {
    value: 100,
    amount: 0
  },
}

function GetNumOfCashInDrawer(cid) {
  let registerTotal = 0;
  cid.forEach(cash => {
    numberOfCoinsInDrawer[cash[0]].amount = Math.round((cash[1] * 100) / (numberOfCoinsInDrawer[cash[0]].value * 100))
    registerTotal += cash[1]
  });
  return registerTotal
}

function checkCashRegister(price, cash, cid) {
  let regTotal = GetNumOfCashInDrawer(cid)

  const cashOrder = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"]
  let output = {
    status: "OPEN",
    change: []
  }
  var changeDue = cash - price;
  if (regTotal === changeDue) {
    return {
      status: "CLOSED",
      change: cid
    }
  }

  for (let i = 0; i < cashOrder.length; i++) {
    if (numberOfCoinsInDrawer[cashOrder[i]].amount === 0 || changeDue < numberOfCoinsInDrawer[cashOrder[i]].value) continue;

    if (numberOfCoinsInDrawer[cashOrder[i]].amount * numberOfCoinsInDrawer[cashOrder[i]].value <= changeDue) {
      output.change.push([cashOrder[i], numberOfCoinsInDrawer[cashOrder[i]].amount * numberOfCoinsInDrawer[cashOrder[i]].value])
      changeDue = Math.round((changeDue - (numberOfCoinsInDrawer[cashOrder[i]].amount * numberOfCoinsInDrawer[cashOrder[i]].value)) * 100) / 100
    } else {
      output.change.push([cashOrder[i], Math.floor(changeDue / numberOfCoinsInDrawer[cashOrder[i]].value) * numberOfCoinsInDrawer[cashOrder[i]].value])
      changeDue = Math.round((changeDue % numberOfCoinsInDrawer[cashOrder[i]].value) * 100) / 100
    }
  }
  if (changeDue > 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  }

  return output;
}

// completed in one hour and fifteen minutes



// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]




checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]) // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.