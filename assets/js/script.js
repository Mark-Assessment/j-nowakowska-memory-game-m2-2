const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;
let matched = 0;
let disableDeck = false;

function flipCard({target: clickedCard}) {
    if(clickedCard !== cardOne && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
     return cardOne = clickedCard;
    }
    cardTwo = clickedCard;
    disableDeck = true;

    let cardOneImg = cardOne.querySelector(".back-view img").src,
    cardTwoImg = cardTwo.querySelector(".back-view img").src;
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matched++;
        if(matched == 8) {
            setTimeout(() =>{
                return shuffleCard();
            }, 1200);
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
    }, 1500);
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

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

