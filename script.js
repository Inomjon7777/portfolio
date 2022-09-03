let box = document.querySelectorAll('.box');
let boxBlack = document.querySelectorAll('.box-black');

box.forEach((e) => {
    e.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "red";
    });
});

boxBlack.forEach((e) => {
    e.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "black";
    });
});