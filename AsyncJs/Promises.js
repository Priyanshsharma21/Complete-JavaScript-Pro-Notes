// Promises are the objects that either return success fetch data or error
// Promises are like real-life promises.
// We go to Starbucks, they give us a token. It indicates that if the ingredients are available, they will give us coffee, and if not present, they give us "No Coffee."

// Promise has three states - Resolve, Reject, Pending.

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

fetchUser()
    .then((user) => {
        console.log(user);
        return fetchUserPhotos();
    })
    .then((photos) => {
        console.log(photos);
        return fetchPhotoDetail();
    })
    .then((photoDetail) => {
        console.log(photoDetail);
    })
    .catch((err) => {
        console.log(err);
    });
