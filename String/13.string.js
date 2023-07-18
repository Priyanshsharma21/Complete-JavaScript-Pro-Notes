const name = "Priyansh, MERN stack developer, content creator, Vuejs, React Native developer, React Developer"

const demo = "hello"


console.log(name.length)
console.log(name[0])

console.log(name.toLowerCase())
console.log(name.toUpperCase())


// Searcning for a substring.


// by default indexOf will search first index match and return value
console.log(name.indexOf("MERN")) // 10
console.log(name.indexOf("Python")) // -1 - not found
console.log(name.indexOf("React", 20)) // start searching from 20

// lastIndexOf - will search the last index of that substring.
console.log(name.lastIndexOf("React")) 


// if include then it tells the index, of not then -1
// but we are intrested in  bool value.

// includes

console.log(name.includes("React"))

// startsWith

console.log(name.startsWith("React"))
console.log(name.endsWith("React"))



// getting substring of a string.

// slice - start index include - end not.

console.log(name.slice(0,8))

// split - returns a array

console.log(name.split(" "))


// reverse a string - 
// join will make array to string again
console.log(name.split(" ").reverse().join(" "))


// repeat is use to repeat

console.log(demo.repeat(5))


// remove empty spaces using trim

const trimKardoString = "   hello priyansh    "
console.log(trimKardoString.trim())



















// STRING
// string[index] - get a certain character of a string
// string.length - return the number of characters in a string
// string.split(' ') - returns an array of words of a string
// string.split('') - returns an array of characters of a string
// string.toLowerCase() - returns a lowercased string
// string.toUpperCase() - returns an uppercased string
// string.includes('subtring') - checks whether a substring exists inside of a string [check the characther case]

// ARRAY
// array[index] - returns a certain value from an array
// array.indexOf('value') - returns the index of the first occurance of that value
// array.length - returns the number of elements in the array
// array.join('') - returns a string of array values
// array.push(value) - adds the value to the end of the array
// array.pop() - removes the value from the end of the array
// array.unshift(value) - adds the value to the start of the array
// array.shift() - removes the value from the start of the array
// array.splice(fromIndex, number_of_elements) - removes the number_of_elements, starting from fromIndex from the array
// array.slice(fromIndex, toIndex) - copies a certain part of the array

// for - looping
const emojis = [ '😀', '😆', '🙃', '😍' ];
const wavingEmojis = [];

for (let i = 0; i < emojis.length; i++) {
   wavingEmojis.push(`👋${emojis[i]}👋`);
}

// forEach - array method for looping
emojis.forEach((emoji) => console.log(emoji));

// map - array method for looping BUT IT HAS RETURNS
const wavingEmojis = emojis.map((emoji) => `👋${emoji}👋`);

// filter
const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

const numbersBiggerThanFive = numbers.filter((number) => number > 5);

// sort
const numbers = [ 3, 4, 1, 5, 4, 7, 2, 23, 12 ];

const sortFromSmalles = numbers.sort((a, b) => a - b);
const sortFromLargest = numbers.sort((a, b) => b - a);

// VALUE VS REFERENCE (part 1: intro)
// arrays
const numbers = [ 1, 2, 3, 4 ]; // #123asd
const anotherNumbers = numbers; // #123asd

anotherNumbers.push(5);

// objects
const person = { 
    firstName: 'John', 
    lastName: 'Doe' 
};

const anotherPerson = person;

anotherPerson.lastName = 'DOEEEE';

console.log(numbers === anotherNumbers); // true
console.log(person === anotherPerson) // true

// VALUE VS REFERENCE (part 2: CLONING ARRAYS AND OBJECTS)
// SHALLOW CLONING - ONE LEVEL DEEP
const original = [ 1, 2, 3 ];
const newOriginal = [...original];

// DEEP CLONING - TWO LEVELS DEEP
const users = [ { name: 'John', age: 25 }, { name: 'Victor', age: 25 }, { name: 'Adrian', age: 25 } ];
const newUsers = JSON.parse(JSON.stringify(users));