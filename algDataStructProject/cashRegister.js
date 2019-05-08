/*Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.*/

function checkCashRegister(price, cash, cid) {
    var change = {
        status: String,
        change: []
    };
    var changeDue = cash - price;
    var register = {
        "ONE HUNDRED": {
            value: 100.00,
            total: 0
        },
        "TWENTY": {
            value: 20.00,
            total: 0
        },
        "TEN": {
            value: 10.00,
            total: 0
        },
        "FIVE": {
            value: 5.00,
            total: 0
        },
        "ONE": {
            value: 1.00,
            total: 0
        },
        "QUARTER": {
            value: 0.25,
            total: 0
        },
        "DIME": {
            value: 0.10,
            total: 0
        },
        "NICKEL": {
            value: 0.05,
            total: 0
        },
        "PENNY": {
            value: 0.01,
            total: 0
        }
    }

    cid.forEach(denomination => {
        register[denomination[0]].total = denomination[1]
    });
    const denominations = Object.keys(register)
    for (const denomination of denominations) {
        if (register[denomination].total === 0 || register[denomination].value > changeDue) {
            change.change.push([denomination, 0])
        } else {
            var denomAmount = register[denomination].total / register[denomination].value;
            var denomCount = 0.00;
            while (changeDue - register[denomination].value >= 0 && denomAmount > 0) {
                //avoid float issue with decimals
                var tempChangeDue = changeDue * 100;
                tempChangeDue -= 100 * register[denomination].value;
                changeDue = tempChangeDue/100
                denomCount += register[denomination].value;
                denomAmount--;
            }
            change.change.push([denomination, denomCount])
        }
    };
    console.log(changeDue)
    if (changeDue === 0) {
        change.status = "CLOSED"
        return (change)
    } else {
        return ({
            status: "INSUFFICIENT_FUNDS",
            change: []
        })
    }
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])