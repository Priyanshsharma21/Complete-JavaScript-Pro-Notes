

//! Shallow Copy - array
// In order to copy value of the array we use spread operator

const numbers = [1,2,3,4,5,6,7,8] // 12121212
const num2 = [...numbers] // shallow cloning  // 234211
const num3 = numbers.slice() // shallow cloning // 342321

const copyNumbers = numbers // normal copy // 12121212

console.log(numbers === num2) // false cause point to different memory location
console.log(numbers === copyNumbers) // true cause point to same memory location


// change in num2 will not affect numbers

num2.push(22)

console.log(num2)
console.log(numbers)




//!object shallow clone

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


const shallowObj1 = {...person} // shallow clone
const shallowObj2 = Object.assign({}, person) // shallow clone / from person assign to empty object
const mainCopy = person

mainCopy.fName = 'Piyu'
shallowObj1.fName = 'Priyansh'

console.log(mainCopy)
console.log(person)
console.log(shallowObj1)
