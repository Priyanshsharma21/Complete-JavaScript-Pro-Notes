const person = {} // literal

const person1 = new Object() // Constructor

console.log(person)
console.log(person1)


// So why different
// when we want to create simple Object then we use normal {}

// Same with this - 
const arr = {}

const arr1 = new Array()


// For dates  there is a special syntax in JS called Date
// we cannot use litral for that



//! Note - Whenever we create anything like array, object, date, number, string,we are actually creating a new object which extends some properties from specific Constructor 


console.log(Array)
console.log(Object)
console.log(Date)

// all return an object
// because when you create a array or number ot string.

const str = new String("This is amazing")

// you can use come methods of it like this
console.log(str.toUpperCase())



// just the thing is - we should use literal because of its syntax. and things which dont have any literal we use new for that in js.

