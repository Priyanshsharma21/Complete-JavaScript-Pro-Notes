// 'this' can have different meaning based on different situation

//! 1. - Constructor Function
// This keyword is used to ref the object executing in current function.
// Every function has it's refrence to it in its current execution context
//!note - Do not works with arrow


function Intro(name){
    this.name = name

    console.log(this)
}

const priyanshIntro = new Intro("Priyansh Sharma")



//! 2. Window object
// when this ref to its parent object. if there is no parent then refer to global window object.

console.log(this) // which contin all the methods and properties of JS.






//! 3. Object - 

const people = {
    name : "Pal",
    getName : function(){
        console.log(this)
    }
}

people.getName()
// this refers to people object 

// JS now use more functional programming means - we make functions for performing some task.
// before object orianted programming is used more often in which we make constrocturs and classes to perform work.


function Car(color, wheel, brand){
    this.color = color
    this.wheel = wheel
    this.brand = brand

    console.log(this)
}

const honda = new Car('black', 4, "Honda City")
const bmw = new Car('yellow', 4, "BMW Ultimate")