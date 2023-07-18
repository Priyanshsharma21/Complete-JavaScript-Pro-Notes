// For Each perform action for each element in the array

const names = ["Priyansh", "Shreyansh", "Elvish", "Abhishek"]


// to eleminate process of creating a variable i and increment it in normal for loop we use for Each

// Array.forEach accepts a callback function which have two params - value and index.


const value = names.forEach((value, i)=>{
    console.log(value)
})

console.log(value) //  undefine
// forEch always return undefine

// we use it when want to do something when we dont want any return value

// never use it when you want to break or stop the loop when some condition true

// never use it with async code

// use it when perform sum.

const numbers = [1,2,3,4,5,6]

let sum = 0
numbers.forEach(val=>{
    sum += val
})

console.log(sum)