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
            change.change.unshift([denomination, 0])
        } else {
            var denomAmount = register[denomination].total / register[denomination].value;
            var denomCount = 0.00;
            var denomNeeded = Math.floor(changeDue / register[denomination].value)
            if (denomNeeded >= denomAmount) {
                changeDue -= register[denomination].total;
                change.change.unshift([denomination, register[denomination].total])
                register[denomination].total = 0;
            } else {
                changeDue -= (register[denomination].value * denomNeeded)
                register[denomination].value -= (register[denomination].value * denomNeeded);
                change.change.unshift([denomination, (register[denomination].value * denomNeeded)])
                }

                // while (changeDue - register[denomination].value >= 0 && denomAmount > 0) {
                //     //avoid float issue with decimals
                //     var tempChangeDue = changeDue * 100;
                //     tempChangeDue -= 100 * register[denomination].value;
                //     changeDue = tempChangeDue / 100
                //     denomCount += register[denomination].value;
                //     denomAmount--;
                // }
                // change.change.push([denomination, denomCount])
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
    checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])