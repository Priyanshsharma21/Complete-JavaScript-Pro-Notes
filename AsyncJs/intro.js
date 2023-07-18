// Javascript is sync and single threaded
// Means code execute line by line and in a particular pattern - left to right top to bottom.

// And it's task is complete instantly, there is no time delay in executing this 


// sync example - 

const syncFunc1 = ()=>{
    console.log("hello 1")

    syncFunc2()


    console.log("hello 2")
}

const syncFunc2 = ()=>{
    console.log("Hello from 2")
}

syncFunc1()



// Async code - Which takes some time to execute. - Javascript do not wait for it to complete. It moves to next async task.


const asyncFunc1 = ()=>{
    console.log("hello 1")

    asyncFunc2()


    console.log("hello 2")
}

const asyncFunc2 = ()=>{
    setTimeout(()=>{
        console.log("Hello from 2")
    },2000)
}

asyncFunc1()