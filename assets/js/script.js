// cards, flip and shake 

let cards = document.querySelectorAll(".card");
let startButton = document.getElementById("start");
let quitButton = document.getElementById("reset");
let newRadioLevel = document.querySelector('input[name="level"]:checked');
let beginnerRadioButton = document.getElementById("beginner");
let intermidiateRadioButton = document.getElementById("intermidiate");
startButton.addEventListener("click", newGame);

quitButton.addEventListener("click", quitGame);
quitButton.style.display = "none";
startButton.style.display = "block";





let firstCard, secondCard;
let matched = 0;
let disableDeck = true
let clockInterval;



function flipCard({ target: clickedCard }) {
    if (clickedCard !== firstCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if (!firstCard) {
            return firstCard = clickedCard;
        }
        secondCard = clickedCard;
        disableDeck = true;

        let firstCardImg = firstCard.querySelector(".back-view img").src,
            secondCardImg = secondCard.querySelector(".back-view img").src;
        matchCards(firstCardImg, secondCardImg);
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) {
        matched++;
        if (matched == 8) {
            setTimeout(() => {
                console.log("I finshed the game");
            }, 1200);
        }
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        firstCard = secondCard = "";
        return disableDeck = false;
    }

    setTimeout(() => {
        firstCard.classList.add("shake");
        secondCard.classList.add("shake");
    }, 500);

    setTimeout(() => {
        firstCard.classList.remove("shake", "flip");
        secondCard.classList.remove("shake", "flip");
        firstCard = secondCard = "";
        disableDeck = false;
    }, 1500);
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    firstCard = secondCard = "";

    let list = document.querySelector('#cardul'), i;

    for (i = list.children.length; i >= 0; i--) {
        list.appendChild(list.children[Math.random() * i | 0]);
    }

    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();

cards.forEach(card => {
    card.removeEventListener("click", flipCard);
});

//clock

const startingTime = 0.3;
let time = startingTime * 60;

const clockEl = document.getElementById("clock");

//clockInterval = setInterval(updateClock, 1000);

function updateClock() {

    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (time < 10) {
        seconds = `0${seconds}`;
    }

    clockEl.innerHTML = `${minutes}:${seconds}`;

    if (time <= 0) {
        endGame();

    }

    if (matched === 8) {
        endGame();
    }
    time--;

}

// levels and start game


function newGame() {

    console.log("newGame");
    cards.forEach(card => {
        card.classList.remove("flip");
    });
    shuffleCard();
    cards.forEach(card => {
        card.addEventListener("click", flipCard);
    });
    disableDeck = false;

    let newRadioLevel = document.querySelector('input[name="level"]:checked');
    if (newRadioLevel.value === "beginner") {
        time = 60;
    } else {
        time = 30;
    }
    clockInterval = setInterval(updateClock, 1000);
    startButton.style.display = "none";
    quitButton.style.display = "block";
    beginnerRadioButton.disabled = true;
    intermidiateRadioButton.disabled = true;
    //startButton.removeEventListener("click", newGame);

}


//Win/Lose Game function


function endGame() {
    console.log("endGame called");
    clearInterval(clockInterval);
    console.log("MATCHED", matched);

    if (matched === 8) {
        alert("YOU WIN");

    } else {
        alert("YOU LOSE");
    }

    cards.forEach(card => {
        card.classList.remove("flip");
    });
    cards.forEach(card => {
        card.removeEventListener("click", flipCard);
    });
    disableDeck = true;


    //startButton.addEventListener("click", newGame);
    startButton.style.display = "block";
    quitButton.style.display = "none";
    beginnerRadioButton.disabled = false;
    intermidiateRadioButton.disabled = false;
}

//Quit button


function quitGame() {
    console.log('quitGame')
    cards.forEach(card => {
        card.classList.remove("flip");
    });
    shuffleCard();
    /*cards.forEach(card => {
        card.addEventListener("click", flipCard);
    });*/
    disableDeck = true;

    document.getElementById("clock").textContent = "00:00"; 
    clearInterval(clockInterval);

    //startButton.addEventListener("click", newGame);
    startButton.style.display = "block";
    quitButton.style.display = "none";

    beginnerRadioButton.disabled = false;
    intermidiateRadioButton.disabled = false;

}

