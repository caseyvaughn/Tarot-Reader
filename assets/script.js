
//API RESOURCES
// all cards API = "https://rws-cards-api.herokuapp.com/api/v1/cards"
// random card API = `https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=${number}`
// card search API = `https://rws-cards-api.herokuapp.com/api/v1/cards/search?q=${cardName}`

//querySelectors
const cardDiv = document.querySelector("#card-data");
const drawOneCard = document.querySelector("#random-card")


//generate 1 random card
async function fetchRandomCard() {
  try {
    const url = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1"
    const res = await axios.get(url);
    const cardData = res.data;
    console.log(cardData);
    showCardData(cardData.cards[0]);
  } catch (error) {
    console.log("ERROR!!!!")
  }
}


function showCardData(cardObj) {
  //card name
  const cardName = document.createElement("h2");
  cardName.innerText = cardObj.name;
  cardDiv.appendChild(cardName);
  console.log(cardName);
  //card type
  const cardType = document.createElement("h3");
  cardType.innerText = cardObj.type;
  cardDiv.appendChild(cardType);
  console.log(cardType);
  //card meaning
  const cardMeaningUp = document.createElement("h3");
  cardMeaningUp.innerText = cardObj.meaning_up;
  cardDiv.appendChild(cardMeaningUp);
  console.log(cardMeaningUp);
  //card description
  const cardDesc = document.createElement("h4");
  cardDesc.innerText = cardObj.desc;
  cardDiv.appendChild(cardDesc);
  console.log(cardDesc);
}

//add event listener for random card buttom
drawOneCard.addEventListener("click", fetchRandomCard);
