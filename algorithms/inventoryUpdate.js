// // Algorithms: Inventory Update
// // Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let result = arr1
    arr2.forEach(element => {
        //if the product is in the results set its index in results to index
        let index = result.findIndex(arr => arr.includes(element[1]))
        //if the product is in the results add to its total, if not push the new product to the end of the result array
        if (index !== -1) {
            result[index][0] += element[0]
        } else {
            result.push(element)
        }
    });
    //localeCompare returns A negative number if the reference string (a) occurs before the compare string (b); positive if the reference string occurs after the compare string; 0 if they are equivalent.
    return result.sort((a,b) => a[1].localeCompare(b[1]));
}

// Example inventory lists
var curInv = [[21, "Bowling Ball"],[2, "Dirty Sock"],[1, "Hair Pin"],[5, "Microphone"]];

var newInv = [[2, "Hair Pin"],[3, "Half-Eaten Apple"],[67, "Bowling Ball"],[7, "Toothpaste"]];

updateInventory(curInv, newInv)


//should return this
// [   [88, "Bowling Ball"],
//     [2, "Dirty Sock"],
//     [3, "Hair Pin"],
//     [3, "Half-Eaten Apple"],
//     [5, "Microphone"],
//     [7, "Toothpaste"]
// ]




// The function updateInventory should return an array.
// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return an array with a length of 6.
// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
// updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
// updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].