// Code which takes some amount of time to execute.

//! setInterval

// after the time we specify it will trigger the callback function again and again.

const myInterval = setInterval(() => {
    console.log("hello pal")
}, 3000);


clearInterval(myInterval);


//! setTimer
// executes the callback function after the time once
const clearTime = setTimeout(() => {
    console.log("Hello Priyansh")
}, 3000)

clearTimeout(clearTime);