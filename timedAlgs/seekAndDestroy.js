// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.


const destroyer = (arr, ...args) => {
   return arr.filter(element => !args.includes(element))
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)

// time = 10min 15 seconds

// took longer than i wanted because i forgot the correct usage of ...args