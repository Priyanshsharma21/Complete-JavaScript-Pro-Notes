// Map allocates memory in order to store values
// foreach not thats why return undeine

// Map return new array, forEach not.

const indvswi = [
    {
        name : "Jaiswal",
        runs : 173
    },

    {
        name : "Virat",
        runs : 75
    },

    {
        name : "rohit",
        runs : 103
    }
]


const runsArray = indvswi.map((item)=>item.runs)

console.log(runsArray)