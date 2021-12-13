
//API RESOURCES
// const allCardsAPI = "https://rws-cards-api.herokuapp.com/api/v1/cards"
const randomAPI = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1"
// const cardSearchAPI = `https://rws-cards-api.herokuapp.com/api/v1/cards/search?q=${cardName}`

//querySelectors
const cardDiv = document.querySelector("#card-data");
const drawOneCard = document.querySelector("#random-card")
const cardSearch = document.querySelector("#card-search")
const searchForm = document.querySelector("#card-form")



//generate 1 random card
async function fetchRandomCard() {
  try {
    // const url = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1"
    // const res = await axios.get(url);
    const res = await axios.get(randomAPI);
    const cardData = res.data;
    console.log(cardData);
    //clear previously displayed card
    cardDiv.innerHTML = "";
    showCardData(cardData.cards[0]);
  } catch (error) {
    console.log("ERROR!!!!")
  }
}

//search for a card
async function fetchCardData(cardName) {
  try {
    const cardSearchAPI = `https://rws-cards-api.herokuapp.com/api/v1/cards/search?q=${cardName}`
    const res = await axios.get(cardSearchAPI);
    const cardData = res.data;
    console.log(cardData);
    showCardData(cardData.cards[0]);
  } catch (error) {
    console.log("ERROR!!!")
  }
}

function handleSubmit(event) {
  event.preventDefault();
  //clear previously displayed cards
  cardDiv.innerHTML = "";
  let inputValue = cardSearch.value;
  //clear search input
  cardSearch.value = "";
  fetchCardData(inputValue);
}

function showCardData(cardObj) {
  //card name
  const cardName = document.createElement("h2");
  cardName.innerText = cardObj.name;
  cardDiv.appendChild(cardName);
  //console.log(cardName);

  //card type
  const cardType = document.createElement("h3");
  cardType.innerText = `Type: ${cardObj.type}`;
  cardDiv.appendChild(cardType);
  //console.log(cardType);

  //card meaning
  const cardMeaningUp = document.createElement("h3");
  cardMeaningUp.innerText = `Meaning (Up): ${cardObj.meaning_up}`;
  cardDiv.appendChild(cardMeaningUp);
  //console.log(cardMeaningUp);

  //card description
  const cardDesc = document.createElement("h4");
  cardDesc.innerText = cardObj.desc;
  cardDiv.appendChild(cardDesc);
  //console.log(cardDesc);
}

//add event listener for random card buttom
drawOneCard.addEventListener("click", fetchRandomCard);
//add event listener for card search 
searchForm.addEventListener("submit", handleSubmit);

