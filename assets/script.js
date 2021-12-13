
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
  //console.log(data);
  const cardName = document.createElement("h3");
  cardName.innerText = cardObj.name;
  cardDiv.appendChild(cardName);
  console.log(cardName);
}

//add event listener for random card buttom
drawOneCard.addEventListener("click", fetchRandomCard);
