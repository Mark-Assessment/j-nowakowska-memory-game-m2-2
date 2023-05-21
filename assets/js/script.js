const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;
let matchedCard=0;
let disableDeck = false;

function flipCard(e) {
    let clickedCard = e.target;
    if(clickedCard !== cardOne && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
     return cardOne = clickedCard;
    }
    cardTwo = clickedCard;
    disableDeck = true;

    let cardOneImg = cardOne.querySelector("img"),
    cardTwoImg = cardTwo.querySelector("img");
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matchedCard++;
        if(matchedCard == 8) {
            setTimeout(() =>{
                return shuffleCard();
            }, 850);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo  = "";
        return disableDeck = false;
    }

    setTimeout(() => {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
    }, 300);

    setTimeout(() => {
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo  = "";
    disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    matchedCard = 0;
    cardOne = cardTwo = "";
    cards.forEach(card =>{
        card.addEventListener("click", flipCard);
        card.classList.remove("flip");
    });
}

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});

