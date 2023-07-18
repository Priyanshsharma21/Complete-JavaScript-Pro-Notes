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

const shallowPerson = {...person}
const sastiShallowCopy = {...person, address : {...person.address}}

shallowPerson.fName = "Pal"
shallowPerson.address.city = "Bangaluru" 
// both the object changes, this is because spread createshallow copy of outer object but inner there is address object which is also an premitive type and in order to make copy of that we need deep copy(remove ref from inner object)




// console.log(person)
// console.log(shallowPerson)



// To make deep copy in order to remove all the refrences. 
// JSON.parse and JSON.stringify are the once.


const deepPerson = JSON.parse(JSON.stringify(person))

deepPerson.address.city = "America"

console.log(deepPerson)
console.log(person)