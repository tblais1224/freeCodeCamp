// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

var holdInt = 0;

function addTogether(a, b) {
    if (arguments.length === 1 && Number.isInteger(arguments)) {
        var sumNums = addTogether(a);
        sumNums(a) {
            return function (b) {
                return x + y;

            };
        }
    } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
        var output = arguments[0] + arguments[1];
        return output;
    } else {
        return undefined;
    };
}

addTogether(2)(3)