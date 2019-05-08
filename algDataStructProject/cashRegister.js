/*Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.*/

function checkCashRegister(price, cash, cid) {
    var change = {
        status: "CLOSED",
        change: []
    };
    var changeOpen = {
        status: "OPEN",
        change: []
    }
    var changeDue = (cash - price) * 100;
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
    //add cash to register
    cid.forEach(denomination => {
        register[denomination[0]].total = denomination[1]
    });

    var openClose = "closed";
    const denominations = Object.keys(register)
    for (const denomination of denominations) {
        if (register[denomination].total === 0 || (register[denomination].value) * 100 > changeDue) {
            change.change.unshift([denomination, 0])
        } else {
            var availableCash = register[denomination].total / register[denomination].value
            if (Math.floor(changeDue / (register[denomination].value * 100)) >= availableCash) {
                change.change.unshift([denomination, register[denomination].total]);
                changeOpen.change.push([denomination, register[denomination].total]);
                changeDue -= (register[denomination].total * 100);
                register[denomination].total = 0;
            } else {
                change.change.unshift([denomination, (Math.floor(changeDue / (register[denomination].value * 100)) * register[denomination].value)]);
                changeOpen.change.push([denomination, (Math.floor(changeDue / (register[denomination].value * 100)) * register[denomination].value)]);
                changeDue -= ((Math.floor(changeDue / (register[denomination].value * 100))) * register[denomination].value *100)
                register[denomination].total -= ((Math.floor(changeDue / (register[denomination].value * 100))) * register[denomination].value)
                openClose = "open";
            }
        };
    }
    console.log(changeDue)
    if (changeDue === 0 && openClose === "closed") {
        return (change)
    } else if ((changeDue === 0 && openClose === "open")) {
        return (changeOpen)
    } else {
        return ({
            status: "INSUFFICIENT_FUNDS",
            change: []
        })
    }
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])