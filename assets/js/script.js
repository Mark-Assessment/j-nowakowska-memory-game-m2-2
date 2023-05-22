const cards = document.querySelectorAll(".card");

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
                return shuffleCard();
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
    }, 300);

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



