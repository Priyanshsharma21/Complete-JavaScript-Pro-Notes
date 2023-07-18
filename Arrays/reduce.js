// Iterates over array and computes it to single value

// ex - we have grocery and we have given price of each item.

const groceryPrice = [50, 80, 200, 1599, 466, 100]


// using for each loop

let sum = 0

groceryPrice.forEach((item)=>{
    sum +=item
})

console.log(sum)



// using reduce

const sumOfG = groceryPrice.reduce((acc, curr)=>{
    return acc + curr
},0)

console.log(sumOfG)


// reduce takes two args = callback and initial value (accumulator)
// Callback also takes two params - accumulator and currentValue

// initially we declear accumulator in 2nd args and after every iteration the acc get's evaluated with whatever we are returning it become the acc

// curr value is the value of array we are iterating startes from index 0 to last one


// return value