const handleClick = (mclick) => {
    const btns = document.querySelector('.btn');

    for(let i=0; i<btns.length; i++){
        mclick[i].classList.remove("active") // remove class
    }

    mclick.target.classList.add("active") // add class
};



btn.addEventListener('click', () => {
    alert("Clicked");
});

const info = btn.getBoundingClientRect();
console.log(info);

btn.hasAttribute('type'); // false
btn.removeAttribute(); // remove attr

const lis = document.querySelector('.lis');
