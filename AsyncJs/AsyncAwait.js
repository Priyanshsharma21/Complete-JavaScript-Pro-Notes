// Addition to promises, its's a better way of writing promises.
// Async functions return promises
// Await wait for the promise to resolve

// const fetchAge = async () => {
//     return 21;
// };

// const fetchData = async () => {
//     const data = fetchAge();
//     const data2 = await fetchAge();
//     console.log(data); // Promise { 21 }
//     console.log(data2); // 21
// };

// fetchData();




const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ user: "Priyansh Sharma" });
        }, 3000);
    });
};

const fetchUserPhotos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['Photo1', 'Photo2']);
        }, 3000);
    });
};

const fetchPhotoDetail = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is photo detail");
        }, 3000);
    });
};

// Using chained promises for sequential execution

const displayData = async()=>{
    const user = await fetchUser();
    const photos = await fetchUserPhotos();
    const photoDetail = await fetchPhotoDetail();

    console.log(user)
    console.log(photos)
    console.log(photoDetail)
}

displayData()

