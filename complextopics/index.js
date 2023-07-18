let a = 1 // 1
let b = a  // 1

a = 2  // 2

console.log(a,b) // 2,1


let name1 = 'Priyansh'
name2 = 'Pal'

name1 = "Piyu"

console.log(name1,name2)

//!Note - In primitive the value is been copies




const animal = ['dog', 'cat', 'horse', 'mouse']

const copyAnimal = animal

copyAnimal.push("Bear")

console.log(animal, copyAnimal) // both get modifu because it copy the refrence

