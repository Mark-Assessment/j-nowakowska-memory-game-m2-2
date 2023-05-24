const startingTime = 0.3;
let time = startingTime * 60;

const clockEl  = document.getElementById("clock");

setInterval (updateClock, 1000);

function updateClock () {

    const minutes = Math.floor(time/60);
    let seconds = time % 60 ;

    if (time < 10){
    seconds = `0${seconds}`;
    } 

    clockEl.innerHTML  = `${minutes}:${seconds}`;

    if (time <= 0) {
    clearInterval(timerInterval);
  }
    time--;

}




