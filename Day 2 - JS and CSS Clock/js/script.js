let secondHand = document.querySelector(".second-hand");
let minHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");
let hands = document.querySelectorAll(".hand");

window.onload = () => {
    displayTime();
}

setInterval(() => {
    displayTime();
}, 1000)

function displayTime(){
    let actualTime = new Date();
    let seconds = (actualTime.getSeconds() * 6) + 90;
    let minutes = (actualTime.getMinutes() * 6) + 90;
    let hours = (actualTime.getHours() * 30) + 90;

    secondHand.style.transform = `rotate(${seconds}deg)`;
    minHand.style.transform = `rotate(${minutes}deg)`;
    hourHand.style.transform = `rotate(${hours}deg)`;
}