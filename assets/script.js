//API RESOURCES
// const allCardsAPI = "https://rws-cards-api.herokuapp.com/api/v1/cards"
const randomAPI = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1"
// const cardSearchAPI = `https://rws-cards-api.herokuapp.com/api/v1/cards/search?q=${cardName}`

//querySelectors
const cardDiv = document.querySelector("#card-data");
const drawOneCard = document.querySelector("#random-card")
const drawThreeCards = document.querySelector("#three-cards");
const cardSearch = document.querySelector("#card-search")
const searchForm = document.querySelector("#card-form")
const imageDiv = document.querySelector("#card-image");
const flexCont = document.querySelector(".flex-container");

//extra features POST MVP
// const starBtn = document.querySelector("add-star");
// const viewStarBtn = document.querySelector("view-starred");
// starBtn.innerHTML = '<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/512px-Golden_star.svg.png">';

//generate 1 random card
async function fetchRandomCard() {
  try {
    //fetch data from API
    const res = await axios.get(randomAPI);
    const cardData = res.data;
    console.log(cardData);
    //clear previously displayed card
    cardDiv.innerHTML = "";
    imageDiv.innerHTML = "";
    //determine if card is normal or flipped 
    const cardObj = cardData.cards[0];
    cardObj.flipped = (Math.random() < .5) ///returns a boolean
    console.log(cardObj.flipped);

    showCardData(cardObj);
    displayImages(cardObj);

    //apply class to flex container - conditional only for single card draw!!
    flexCont.classList.add("one-card-display");

    // showCardData(cardData.cards[0]); //can change this to (cardObj)
    // displayImages(cardData.cards[0]);
  } catch (error) {
    console.log("ERROR!!!!")
  }
}

async function fetchThreeCards() {
  try {
    //clear previously displayed cards
    cardDiv.innerHTML = "";
    imageDiv.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const res = await axios.get(randomAPI);
      const cardData = res.data;
      console.log(cardData);

      //determine card direction
      const cardObj = cardData.cards[0];
      cardObj.flipped = (Math.random() < .5) ///returns a boolean

      console.log(typeof (cardObj));
      // //try to add class name to cards
      // cardObj.classList =`${i}`
      // console.log(cardObj.outerHTML);
      // const cardShort = cardObj.name_short;
      // cardObj.classList.add(`${cardShort}`);
      // // console.log(cardObj.outerHTML);

      showCardData(cardData.cards[0], true);
      displayImages(cardData.cards[0]);

      //remove one-card-display class !
      flexCont.classList.remove("one-card-display");
      //add class for 29% width to evenly display columns



    }
  } catch (error) {
    console.log("THREE CARD ERROR");
  }
}

function displayImages(cardObj, isMultiCard) {
  const img = document.createElement("img");
  const cardShort = cardObj.name_short;
  img.src = `https://www.sacred-texts.com/tarot/pkt/img/${cardShort}.jpg`
  img.alt = `${cardObj.name} card`;
  //display card's direction 
  if (!cardObj.flipped) {
    img.classList = "img-norm";
  } else {
    img.classList = "img-rev";
  }
  //create div to hold a single card image
  const singleImageDiv = document.createElement("div");
  imageDiv.appendChild(singleImageDiv);
  singleImageDiv.classList = "single-image-div";

  singleImageDiv.appendChild(img);

  //handle isMultiCard to remove 29% width for one card draw image
  //handle isMultiCard
  if (isMultiCard) {
    singleImageDiv.classList.add("one-third-width");
  }

  //add event listener to reverse image with click
  img.addEventListener("click", function () {
    img.classList.toggle("img-rev");
  })
}

function showCardData(cardObj, isMultiCard) {

  //create a div to store each card's data
  const singleCardDiv = document.createElement("div");
  cardDiv.appendChild(singleCardDiv);
  singleCardDiv.classList = "single-card-div";

  //handle isMultiCard
  if (isMultiCard) {
    singleCardDiv.classList.add("one-third-width");
  }

  //card name
  const cardName = document.createElement("h2");
  cardName.innerText = cardObj.name;
  singleCardDiv.appendChild(cardName);

  //card type
  const cardType = document.createElement("h3");
  cardType.innerText = `Type: ${cardObj.type}`;
  singleCardDiv.appendChild(cardType);

  //card direction probability logic
  if (!cardObj.flipped) {
    //card meaning up
    const cardMeaningUp = document.createElement("h3");
    cardMeaningUp.innerText = `Meaning (Up): ${cardObj.meaning_up}`;
    singleCardDiv.appendChild(cardMeaningUp);
    console.log(cardMeaningUp);
  } else {
    //card meaning rev 
    const cardMeaningRev = document.createElement("h3");
    cardMeaningRev.innerText = `Meaning (Reverse): ${cardObj.meaning_rev}`
    singleCardDiv.appendChild(cardMeaningRev);
  }
  //card description
  const cardDesc = document.createElement("h4");
  cardDesc.innerText = cardObj.desc;
  singleCardDiv.appendChild(cardDesc);
}


function showSearchedCardData(cardObj) {
  //card name
  const cardName = document.createElement("h2");
  cardName.innerText = cardObj.name;
  cardDiv.appendChild(cardName);

  //card type
  const cardType = document.createElement("h3");
  cardType.innerText = `Type: ${cardObj.type}`;
  cardDiv.appendChild(cardType);

  //card meaning up 
  const cardMeaningUp = document.createElement("h3");
  cardMeaningUp.innerText = `Meaning (Up): ${cardObj.meaning_up}`;
  cardDiv.appendChild(cardMeaningUp);

  //card meaning rev 
  const cardMeaningRev = document.createElement("h3");
  cardMeaningRev.innerText = `Meaning (Reverse): ${cardObj.meaning_rev}`
  cardDiv.appendChild(cardMeaningRev);

  //card description
  const cardDesc = document.createElement("h4");
  cardDesc.innerText = cardObj.desc;
  cardDiv.appendChild(cardDesc);
}

//fetch data for card search function 
async function fetchCardData(cardName) {
  try {
    const cardSearchAPI = `https://rws-cards-api.herokuapp.com/api/v1/cards/search?q=${cardName}`
    const res = await axios.get(cardSearchAPI);
    const cardData = res.data;
    cardDiv.innerHTML = "";
    imageDiv.innerHTML = "";
    showSearchedCardData(cardData.cards[0]);
    displayImages(cardData.cards[0])
  } catch (error) {
    console.log("FETCH CARD DATA ERROR!!!")
  }
}

//card search function
function handleSubmit(event) {
  event.preventDefault();
  //clear previously displayed cards
  cardDiv.innerHTML = "";
  let inputValue = cardSearch.value;
  //clear search input
  cardSearch.value = "";
  fetchCardData(inputValue);
}


//EVENT LISTENERS//
//add event listener for random card buttom
drawOneCard.addEventListener("click", fetchRandomCard);
//add event listener for three card option
drawThreeCards.addEventListener("click", fetchThreeCards);
//add event listener for card search 
searchForm.addEventListener("submit", handleSubmit);
//event listener to star a card
// starBtn.addEventListener("click", starCard);
// //event listener to view starred cards
// viewStarBtn.addEventListener("click", viewStars);

//find what is causing overlay!!!

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function (el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);


//old showcarddata function
// function showCardData(cardObj) {
//   //card name
//   const cardName = document.createElement("h2");
//   cardName.innerText = cardObj.name;
//   cardDiv.appendChild(cardName);
//   //console.log(cardName);

//   //card type
//   const cardType = document.createElement("h3");
//   cardType.innerText = `Type: ${cardObj.type}`;
//   cardDiv.appendChild(cardType);
//   //console.log(cardType);

//   //card direction probability logic
//   if (Math.random() < 0.5) {
//     //card meaning up
//     const cardMeaningUp = document.createElement("h3");
//     cardMeaningUp.innerText = `Meaning (Up): ${cardObj.meaning_up}`;
//     cardDiv.appendChild(cardMeaningUp);
//     console.log(cardMeaningUp);

//     // image.classList = "img-norm";
//     imageDiv.classList = "img-norm";
//   } else {
//     //card meaning rev 
//     const cardMeaningRev = document.createElement("h3");
//     cardMeaningRev.innerText = `Meaning (Reverse): ${cardObj.meaning_rev}`
//     cardDiv.appendChild(cardMeaningRev);
//     // console.log(cardMeaningRev);
//     // image.classList = "img-rev";
//     imageDiv.classList = "img-rev";
//   }
//   //card description
//   const cardDesc = document.createElement("h4");
//   cardDesc.innerText = cardObj.desc;
//   cardDiv.appendChild(cardDesc);
//   //console.log(cardDesc);
// }