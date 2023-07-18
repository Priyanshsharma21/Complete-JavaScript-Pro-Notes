// A class is a schema for an object that can save many values


class Person{
    constructor(name, age, hasGf){
        this.name = name
        this.age = age
        this.hasGf = hasGf
    }
}


const pal = new Person('Pal Bijewar', 22, false)
const pu = new Person('Priyansh Sharma', 21, false)

console.log(pal)
console.log(pu)





// Same thing we can do with this also.


const createPerson = (name, age, hasGf)=>{
    const person = {
        name,
        age,
        hasGf
    }

    return person
}

const palBijewar = createPerson('Pal Bijewar', 22, false)
const piyu = createPerson('Priyansh Sharma', 21, false)

console.log(palBijewar)
console.log(piyu)