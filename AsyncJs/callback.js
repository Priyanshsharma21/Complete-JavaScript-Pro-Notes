// Things that takes some amount of time like 
// Data fetching from API. 
// DB calls.
// timeout, interval.
// callback function are the functions which are executed or triggered after some event.

// Callback - Because it call's back after certain action

//!Ex =


const fetchUser = (username,callback)=>{
    setTimeout(()=>{
        const user = {username}

        return callback(user)
    },3000)
}


fetchUser('Priyansh Sharma', (data)=>{
    console.log("🚀 ~ file: callback.js:24 ~ fetchUser ~ data:", data)
})