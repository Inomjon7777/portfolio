const section = document.querySelector("section");
const logo = document.querySelector(".logo");
const FBS = 60;

let xPosition = 10;
let yPosition = 10;
let xSpeed = 4;
let ySpeed = 4;

//x va y o'qiga 10px dan surayapti
function update() {
  logo.style.left = xPosition + "px";
  logo.style.top = yPosition + "px";
}

setInterval(() => {
  if (xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0) {
    xSpeed = -xSpeed;
  }
  if (yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0) {
    ySpeed = -ySpeed;
  }
  xPosition += xSpeed;
  yPosition += ySpeed;
  update();
}, 1000 / FBS);
