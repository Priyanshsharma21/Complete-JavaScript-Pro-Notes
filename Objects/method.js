// Method is a function associate with an object we created
// It is a property of an object which is a function


const dog = {
    name : "Tom",
    age : 3,
    bark : function(){
        // we can use 'this' which refers to this dog object
        // we cannot use this in arrow function we need normal function for that.
        console.log(`Woof Woof`)
    },
}

// Build in methods

// Object constructor has many build in methods

const person = {
    fName : "Priyansh",
    lName : "Sharma",
    email : "sharma@gmail.com",
    hobbies : ["cricket", "Guitar", "Content Creation", "Coding", "Gym is Life"],
    address : {
        houseNo : 21,
        pincode : 45111,
        city: 'Sanawad'
    },

    haveGf : false,
}


// Object.keys - created a array containing object keys as values

console.log(Object.keys(person))

// Object.values - created a array containing object values as values
console.log(Object.values(person))

// Object.entries - created a nested array of key values pairs
console.log(Object.entries(person))



//Object.freeze() - prevents modification
const admin = Object.freeze(person)


//Object.seal() - prevents adding new properties but we can modify existing one
const admin2 = Object.seal(person)
