// Let's say we are creating social media , once user is fetched we want to fetch there photo.



const fetchUser = (username,callback)=>{
    setTimeout(()=>{
        const user = {username}

        return callback(user)
    },3000)
}

const fetchUserPhoto = (username,callback)=>{
    setTimeout(()=>{
        const photos = ["Photo1", "Photo2"]

        return callback(photos)
    },3000)
}


const fetchPhotoDetails = (photo,callback)=>{
    setTimeout(()=>{
        const photoDetails = 'Now we have photo details'

        return callback(photoDetails)
    },3000)
}



fetchUser('Priyansh Sharma', (data)=>{
    console.log("🚀 ~ file: callback.js:24 ~ fetchUser ~ data:", data)

    fetchUserPhoto(data.username, (userphoto)=>{
        console.log(userphoto)

        fetchPhotoDetails(userphoto[0], (details)=>{
            console.log(details)
        })
    })
})


// now 3 sec and username fetch and then 3 sec and photos will be fetched
// above you can see this is how callback hell looks like, it will grow more and more
// every function gets argument to another function. 

