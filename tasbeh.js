let myShow = document.querySelector('.show');
let myAdd = document.querySelector('.add');
let myLight = document.querySelector('.led');
let myRemove = document.querySelector('.remove');

myLight.addEventListener("click", function () {
    myShow.style.backgroundColor = "#00ff77";
});

myAdd.addEventListener("click", function () {
    let adder = document.querySelector('.adder')
    adder.value = parseInt(adder.value) + 1;
});
myRemove.addEventListener("click", function () {
    let adder = document.querySelector('.adder')
    adder.value = parseInt(adder.value) * 0;
});