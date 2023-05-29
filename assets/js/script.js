// Cards for the game; flip and shake functions
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
// These functions allow the cards to shake and flip back if incorrectly matched, or flip and stay flipped if 2 cards are matched correctly 
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
// This function let the cards shuffle in a random sequence
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

//This piece of code prevents the cards from being flipped when the game is first run 
cards.forEach(card => {
    card.removeEventListener("click", flipCard);
});

// Clock - this creates the clock used in the game, inspiration for this was taken from W3School and Very simple JavaScript timer [setInterval()] youtube video ("https://www.youtube.com/watch?v=4piMZDO5IOI")
const startingTime = 0.3;
let time = startingTime * 60;

const clockEl = document.getElementById("clock");

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
//This allows the timer to end if all 8 cards are matched and alert to pop up for the player with you won message 
    if (matched === 8) {
        endGame();
    }
    time--;
}

// Start game and levels - this function is used for the start button by unlocking the cards so they can be flipped, as well as sets a timer for each level (radio buttons) 
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
//Below allows the Start button to be removed after the function above is called and Quit button to appear instead - this happens throughout the code     
    startButton.style.display = "none";
    quitButton.style.display = "block";
    beginnerRadioButton.disabled = true;
    intermidiateRadioButton.disabled = true;
}


// Win and Lose Game function
function endGame() {
    console.log("endGame called");
    clearInterval(clockInterval);
    console.log("MATCHED", matched);

    if (matched === 8) {
        alert("Congratulations! You Won - Choose the difficulty level and press the Start button again to begin a new game.");

    } else {
        alert("Better luck next time - you lost! Adjust the difficulty level and press the Start button to practice some more.");
    }

    cards.forEach(card => {
        card.classList.remove("flip");
    });
    cards.forEach(card => {
        card.removeEventListener("click", flipCard);
    });
    disableDeck = true;

    startButton.style.display = "block";
    quitButton.style.display = "none";
//Below disables the radio buttons when the game is beign played and timer is running, they get unlocked again after the game ends
    beginnerRadioButton.disabled = false;
    intermidiateRadioButton.disabled = false;
}

//Quit button - restarts the game to default
function quitGame() {
    console.log('quitGame')
    cards.forEach(card => {
        card.classList.remove("flip");
    });
    shuffleCard();
  
    disableDeck = true;

    document.getElementById("clock").textContent = "00:00"; 
    clearInterval(clockInterval);

    startButton.style.display = "block";
    quitButton.style.display = "none";

    beginnerRadioButton.disabled = false;
    intermidiateRadioButton.disabled = false;
}

