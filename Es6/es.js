// ECMA Script 6 is the  latest Javascript Version with some amazing changes


//! Variables - Const and Let.
// Before es6 we use Var

// In var we can reassign and redeclear variable.

// in Let and const we can't do that


//! Arrow functions - 
// They are better ways to write norkal and functional expressions


//! default params

const person = (name = "Priyansh" , age)=>{
    return `${name}, ${age}`
}


const res = person(age = 21)
console.log(res)



//! template string.
const name = "Priyansh Sharma"
const person2 = `${name} is a MERN developer`
console.log(person2)



//! import export.

// we have default export and we can import with any name.
// we have name export and we have to import with same name.





//! Rest and Spread
// Rest Parameter:
// The rest parameter is used to represent an indefinite number of arguments as an array. It allows you to gather multiple elements into an array within a function parameter or destructuring assignment.

const add = (...args)=>{
    const sum = args.reduce((acc,curr)=>{
        return acc + curr
    },0)

    return sum
}

const respo = add(2,3,4,5,6,7,8,9)
console.log(respo)



// Spread Operator:
// The spread operator is used to expand an iterable (e.g., an array, string, or object) into individual elements. It allows you to make copies of arrays or objects, merge arrays, and pass individual elements as arguments to functions.

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];


// same for ths objects
const ceo = { 
    name : "Priyansh Sharma", 
    age : 21,
    gender : 'male',
    role : 'CEO',
    address : {
        pincode : 451111,
        city : 'Sanawad',
        state : "M.P"
    }
}


const morePropCeo = { ...ceo, isAnnoying : false }







//! Object and array destructuring. - Protect DRY - Don't repeat yourself.

// taking particular value from the object or array using destructure.


const { gender,address : {pincode} } = ceo

console.log(gender,pincode)

