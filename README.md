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

![sample site homepage] https://www.figma.com/proto/p3TnZBOBQg2wG3bbOHJBX4/Project-1--Tarot-Reader!?node-id=5%3A119&scaling=min-zoom&page-id=5%3A118]

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
- Display random selection of card images on homepage


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
| Set up basic HTML, CSS, & JS | H | 4hrs|  hrs |  hrs |
| Setup API | H | 3hrs| hrs | hrs |
| Append items to the DOM | H | 3hrs| hrs | hrs |
| Create function for random card selection| H | 3hrs| hrs | hrs |
| Link & display images | H | 3hrs| hrs | hrs |
| Create search function | H | 2hrs| hrs | hrs |
| Create 3-card spread | H | 3hrs| hrs | hrs |
| Display random cards on homepage | H | 4hrs| hrs | hrs |
| Create reverse card option | H | 3hrs| hrs | hrs |
| Improve & polish design | H | 5hrs| hrs | hrs |
| Debugging | H | 4hrs| hrs | hrs |
| Cleaning code & refactoring| H | 3hrs| hrs | hrs |
| Testing | H | shrs| hrs | hrs |
| Total | H | 42hrs| hrs | hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
