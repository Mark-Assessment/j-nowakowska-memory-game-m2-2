// cards, flip and shake 

let cards = document.querySelectorAll(".card");


let firstCard, secondCard;
let matched = 0;
let disableDeck = false;

function flipCard({target: clickedCard}) {
    if(clickedCard !== firstCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!firstCard) {
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
    if(img1 === img2) {
        matched++;
        if(matched == 8) {
            setTimeout(() =>{
              //  return shuffleCard();
              console.log("I finshed the game");
            }, 1200);
        }
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        firstCard = secondCard  = "";
        return disableDeck = false;
    }

    setTimeout(() => {
    firstCard.classList.add("shake");
    secondCard.classList.add("shake");
    }, 500);

    setTimeout(() => {
    firstCard.classList.remove("shake", "flip");
    secondCard.classList.remove("shake", "flip");
    firstCard = secondCard  = "";
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

    cards.forEach((card, i)=>{
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});

//clock

const startingTime = 0.3;
let time = startingTime * 60;

const clockEl  = document.getElementById("clock");

clockInterval = setInterval(updateClock, 1000);

function updateClock () {

    const minutes = Math.floor(time/60);
    let seconds = time % 60 ;

    if (time < 10){
    seconds = `0${seconds}`;
    } 

    clockEl.innerHTML  = `${minutes}:${seconds}`;

    if(time <=0) {
    endGame();

  }
    time--;

}

// levels

//WinGame function

function endGame() {
    console.log("endGame called");
    clearInterval(clockInterval);
    console.log("MATCHED", matched);

    if(matched === 8){
        alert("YOU WIN");

    } else {
        alert("YOU LOSE");
    }
}


let newStartBtn = document.getElementById("start");
newStartBtn.onclick = function(e) {
    let newRadioLevel = document.querySelector('input[name="level"]:checked');
    if (newRadioLevel.value === "beginner") {
        time = 60;
    } else {
        time = 30;
    }
};


