//circle clock 
let second = 0;
let minut = 0;
let hour = 0;
let d = new Date();

setInterval(
    function(){
        d = new Date();
        second = d.getSeconds() * 6;
        minut = d.getMinutes() * 6;
        hour = d.getHours() * 30 + Math.round(minut / 12);
        document.getElementById("secund-hand").style.transform = "rotate(" + second + "deg)";
        document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";
        document.getElementById("minute-hand").style.transform = "rotate(" + minut + "deg)";
    }, 1000
);

// square clock
function displayTime(){
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}
setInterval(displayTime,10);