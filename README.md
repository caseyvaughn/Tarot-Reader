# -Placeholder-Project-1

# Project Overview

## Project Name

Tarot Reader 

## Project Description

To create an app that generates a tarot card reading for the user. The user will select a random card from the tarot deck and will receive the card's title, image, and description. The user can also search for a specific card if they are curious about a card's meaning. 


## API and Data Sample

Tarot Card API: https://app.swaggerhub.com/apis/ekswagger/rws-tarot_card_api/1.0.0#/Get%20cards

Note: This API does not have images for the cards. The API is using data from this site: https://www.sacred-texts.com/tarot/pkt/index.htm

I will interpolate the card's name into a URL to display selected card's image. 
Example:
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

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

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
- Allow user to store favorite or past cards
- Include an option for a 3 card spread
- Include readings for the card's reverse


## Project Schedule
  
|  Day | Deliverable | Status
|---|---| ---|
|Dec 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Dec 13| Project Approval | Incomplete
|Dec 13| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Dec 14| Pseudocode / actual code | Incomplete
|Dec 15| Initial Clickable Model  | Incomplete
|Dec 16| MVP | Incomplete
|Dec 17| Presentations | Incomplete



## Priority Matrix
https://whimsical.com/project-1-priority-matrix-XzQbG9vzYfuypin4mFwvk1

<iframe style="border:none" width="800" height="450" src="https://whimsical.com/embed/XzQbG9vzYfuypin4mFwvk1"></iframe>

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
