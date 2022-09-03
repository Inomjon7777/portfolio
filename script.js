//  get html elements 
let startBtn = document.querySelector(".start-btn");
let startZone = document.querySelector(".start-zone");
let input = document.querySelector("input");

// gets the canvas element
const canvas = document.querySelector('canvas');

// gets the width and height of browser viewport
const width = window.innerWidth;
const height = window.innerHeight;

// set the width and height of canvas equal to browser viewport
canvas.width = width;
canvas.height = height;

// call the getContext method to draw 2d shape
const ctx = canvas.getContext('2d');

// create Ball class
class Ball {
    constructor(x, y, velx, vely, size, color) {
        this.x = x; // horizontal position of the ball
        this.y = y; // vertical position of the ball
        this.velx = velx; // (to'pimizni jonlantirganda x koordinatasiga qo'shilgan tezlik x)
        this.vely = vely; // velocity y added to coordinate y
        this.size = size; // size is a radius of the ball
        this.color = color; // fill ball shape with given color
    }

    // create draw func
    drawBall() {
        ctx.beginPath(); // start drawing
        ctx.fillStyle = this.color; // to'p shaklini berilgan rang bilan to'ldirish

        // x and y is center of the ball
        // size is radius of the ball
        // 0 - to'p radiusi atrofidagi darajaning boshlang'ich nuqtasi
        // 2 * Math.PI 360 darajaga teng bo'lgan yakuniy nuqta
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill(); // finish drawing
    }

    // create update func
    updateBall() {
        //agar x va y pozitsiyalari brauzer ko'rish oynasidan kattaroq yoki kichikroq bo'lsa, to'plar boshqa tomonga buriladi
        if (this.x + this.size >= width || this.x - this.size <= 0) {
            this.velx = -this.velx;
        }

        if (this.y + this.size >= height || this.y - this.size <= 0) {
            this.vely = -this.vely;
        }

        // X va y ga qo'shilgan x va y tezligi har doim yangilangan to'pni koordinata qiladi
        this.x += this.velx;
        this.y += this.vely;
    }
}

//   create random number generator func
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 10)) + min;
    return num;
}

//   bir nechta to'plarni yaratish va qatorda saqlash
const balls = [];
startBtn.addEventListener("click", function () {
    startZone.classList.add("hidden");
    while (balls.length < input.value) {
        let size = 20;

        // create a new instance of Ball class
        // now replace static number with random number
        const ball = new Ball(
            random(size, width - size),
            random(size, height - size),
            random(-7, 7),
            random(-7, 7),
            size,
            `white`
        );
        balls.push(ball);
    }
});


//   create loop func
function loop() {
    // cover the previous frame's drawing before the next one is drawn
    ctx.fillStyle = 'dodgerblue';
    ctx.fillRect(0, 0, width, height);

    // run necessary func
    for (let i = 0; i < balls.length; i++) {
        balls[i].drawBall();
        balls[i].updateBall();
    }

    // lets calls loop func itself over and over again
    //  and make animation smooth
    requestAnimationFrame(loop);
}

// finaly call the loop func once ot start
loop();