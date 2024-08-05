const clock = document.querySelector("#clock");
const clockTwo = document.querySelector("#clock-2")

setInterval(function () {
    let date = new Date()
    clock.innerHTML = (date.toLocaleTimeString());
}, 1000);

setInterval(() => {
    let date = new Date()
    clockTwo.innerHTML = (date.toLocaleTimeString());
}, 1000);