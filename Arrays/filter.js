// filter method filter out all the elements inside the array which satidfy the condition and return new array of it.

const runs = [173, 103, 75, 34, 21, 76, 22, 4]


const manOfMatch = runs.filter(run=>run>100)

console.log(manOfMatch)




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



const mom = indvswi.filter((item)=>{
    if(item.runs > 100){
        return item
    }
})

console.log(mom)