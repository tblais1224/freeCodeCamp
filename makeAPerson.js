// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly
    let firstName = firstAndLast.split(" ")[0];
    let lastName = firstAndLast.split(" ")[1];
    let fullName = firstAndLast
    this.getFullName = function () {
        return fullName;
    };
    this.getFirstName = function () {
        return firstName;
    };
    this.getLastName = function () {
        return lastName;
    };
    this.setFullName = function (name) {
        fullName = name;
        firstName = fullName.split(" ")[0];
        lastName = fullName.split(" ")[1];
    };
    this.setFirstName = function (name) {
        firstName = name;
        fullName = firstName + " " + lastName
    };
    this.setLastName = function (name) {
        lastName = name;
        fullName = firstName + " " + lastName
    };
    return firstAndLast;
};

var bob = new Person('Bob Ross');

// completed makeAPerson in 7 min

bob.firstName // should return undefined.
bob.lastName // should return undefined.
bob.getFirstName() // should return "Bob".
bob.getLastName() // should return "Ross".
bob.getFullName() // should return "Bob Ross".
bob.getFullName() // should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.getFullName() // should return "Haskell Curry" after bob.setLastName("Curry").
bob.getFullName() // should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getFirstName() // should return "Haskell" after bob.setFullName("Haskell Curry").
bob.getLastName() // should return "Curry" after bob.setFullName("Haskell Curry").
