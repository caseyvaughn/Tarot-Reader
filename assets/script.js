async function fetchCards() {
  const url = "https://rws-cards-api.herokuapp.com/api/v1/cards"
  const res = await axios.get(url);
  console.log(res.data);
}

fetchCards();