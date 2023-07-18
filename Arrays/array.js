const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat']



// length
console.log(days.length)

// item
console.log(days[3])

days[3] = "Wednesday Adams"


console.log(days)


// we can have data of different type also

const values = [
    "Hello",
    ()=>{
        console.log("Its me")
    },
    true,
    {age : 30}
]

console.log(values)

// but we do this in object often



//! Methods

// remember array is always pural
const names = ["Priyansh", "Shreyansh", "Elvish", "Abhishek"]


// add at last. - push - returns length of the array

names.push("Piyush")
console.log(names)

// remove from last
names.pop()
console.log(names)


// remove the first and shift index.
names.shift()
console.log(names)


// new value to first index
names.unshift("Priyansh")
console.log(names)


// splice
names.splice(2, 0, "Pal", "harshit" ) // start index, how many to remove, how many to add
console.log(names)
names.splice(2, 1, "Shikha", "Kml" )
console.log(names)

// remove elements
names.splice(2,2)





// slice
names.slice(1)
console.log(names)