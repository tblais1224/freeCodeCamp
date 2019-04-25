// Fill in the object constructor with the following methods below:

// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.

// These methods must be the only available means of interacting with the object.


var Person = function (firstAndLast) {
    this.setFirstName = function (name) {
        var nameArray = firstAndLast.split(' ');
        firstAndLast = name + " " + nameArray[1];
    };
    this.setLastName = function (name) {
        var nameArray = firstAndLast.split(' ');
        firstAndLast = nameArray[0] + " " + name;
    };
    this.setFullName = function (name) {
        firstAndLast = name;
    };
    this.getFirstName = function () {
        var nameArray = firstAndLast.split(' ');
        return nameArray[0];
    };
    this.getLastName = function () {
        var nameArray = firstAndLast.split(' ');
        return nameArray[1];
    };
    // Complete the method below and implement the others similarly
    this.getFullName = function () {
        return firstAndLast;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();