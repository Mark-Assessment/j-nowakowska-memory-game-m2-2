const startingTime = 1;
let time = startingTime * 60;

const clockEl  = document.getElementByClassName("clock");

function updateClock () {

    const minutes = Math.floor(time/60);
    let seconds = time % 60 ;

    clockEl.innerHTML  = `${minutes}: ${seconds}`;
    time--;
}