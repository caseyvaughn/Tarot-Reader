# Tarot Reader

# Project Overview

## Project Name

Tarot Reader 

## Project Description

Create an app that generates a tarot card reading for the user. The user will select a random card from the tarot deck and will receive the card's title, meaning, and description. The user can also search for a specific card. 


## API and Data Sample

Tarot Card API: https://app.swaggerhub.com/apis/ekswagger/rws-tarot_card_api/1.0.0#/Get%20cards

Note: This API does not have images for the cards. As a post-MVP item, I plan to interpolate the card's name into a URL to display the selected card's image. 

Image source site: https://www.sacred-texts.com/tarot/pkt/index.htm

`https://www.sacred-texts.com/tarot/pkt/img/${card.name_short}.jpg`



```
{
      "type": "major",
      "name_short": "ar03",
      "name": "The Empress",
      "value": "3",
      "value_int": 3,
      "meaning_up": "Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance.",
      "meaning_rev": "Light, truth, the unravelling of involved matters, public rejoicings; according to another reading, vacillation.",
      "desc": "A stately figure, seated, having rich vestments and royal aspect, as of a daughter of heaven and earth. Her diadem is of twelve stars, gathered in a cluster. The symbol of Venus is on the shield which rests near her. A field of corn is ripening in front of her, and beyond there is a fall of water. The sceptre which she bears is surmounted by the globe of this world. She is the inferior Garden of Eden, the Earthly Paradise, all that is symbolized by the visible house of man. She is not Regina coeli, but she is still refugium peccatorum, the fruitful mother of thousands. There are also certain aspects in which she has been correctly described as desire and the wings thereof, as the woman clothed with the sun, as Gloria Mundi and the veil of the Sanctum Sanctorum; but she is not, I may add, the soul that has attained wings, unless all the symbolism is counted up another and unusual way. She is above all things universal fecundity and the outer sense of the Word. This is obvious, because there is no direct message which has been given to man like that which is borne by woman; but she does not herself carry its interpretation.\nIn another order of ideas, the card of the Empress signifies the door or gate by which an entrance is obtained into this life, as into the Garden of Venus; and then the way which leads out therefrom, into that which is beyond, is the secret known to the High Priestess: it is communicated by her to the elect. Most old attributions of this card are completely wrong on the symbolism--as, for example, its identification with the Word, Divine Nature, the Triad, and so forth."
    },
```
## Wireframes

Link to homepage, 1-card spread, and 3-card spread displays: 
https://www.figma.com/file/p3TnZBOBQg2wG3bbOHJBX4/Project-1--Tarot-Reader!?node-id=5%3A119

### MVP/PostMVP

#### MVP 

- Find and use external API
- Generate a random card for the user
- Display selected card's name, meaning, and description on the page
- Style the reading's display using CSS Flexbox
- Include responsive CSS design 
- Allow user to search for a specific card

#### PostMVP  
- Display card image (images not included in API)
- Include an option for a 3 card spread
- Include readings for the card's reverse

## Project Schedule
  
|  Day | Deliverable | Status
|---|---| ---|
|Dec 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Dec 13| Project Approval | Complete
|Dec 13| Core Application Structure (HTML, CSS, etc.) | Complete
|Dec 14| Pseudocode / actual code | Complete
|Dec 15| Initial Clickable Model  | Complete
|Dec 16| MVP | Complete
|Dec 17| Presentations | Incomplete



## Priority Matrix
https://whimsical.com/project-1-priority-matrix-XzQbG9vzYfuypin4mFwvk1


## Timeframes
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Set up basic HTML, CSS, & JS | H | 4hrs|  4hrs |  hrs |
| Setup API | H | 3hrs| 3hrs | hrs |
| Append items to the DOM | H | 3hrs| 3hrs | hrs |
| Create function for random card selection| H | 3hrs| 2hrs | hrs |
| Link & display images | H | 3hrs| 3hrs | hrs |
| Create search function | H | 2hrs| 1.5hrs | hrs |
| Create 3-card spread | H | 3hrs| 5hrs | hrs |
| Create reverse card option | H | 3hrs| 4hrs | hrs |
| Improve & polish design | H | 5hrs| 7hrs | hrs |
| Debugging | H | 4hrs| 5hrs | hrs |
| Cleaning code & refactoring| H | 3hrs| 3hrs | hrs |
| Testing | H | 2hrs| hrs | 2hrs |
| Total | H | 38hrs| hrs | 42hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description. 

- Interpolate API's name_short key into image source URL
- If/else logic with cardObj.flipped to determine card's direction (normal or reverse);
- Pass isMultiCard agrument to add a class for 3-card spread for CSS styling
- Add an event listener to each image to allow user to reverse image with click 

```
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
  if (isMultiCard) {
    singleImageDiv.classList.add("one-third-width");
  }
  //add event listener to reverse image with click
  img.addEventListener("click", function () {
    img.classList.toggle("img-rev");
  })
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
