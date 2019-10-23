//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

const whatIsInAName = (arr, object) => {
    let keys = Object.keys(object)
    return arr.filter(obj => {
        let check = true
        for (let i = 0; i < keys.length; i++) {
            if (!obj[keys[i]] || obj[keys[i]] !== object[keys[i]]) {
                check = false
                break;
            }
        }
        return check
    })
}


whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
})


// completed in 20min

// this took way too long, i used the same logic 3 times and for some reason i kept having an error 