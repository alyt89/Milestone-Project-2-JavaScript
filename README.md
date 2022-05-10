# Colour Recall

![Responsive screenshot](/assets/images/colour-recall-responsive.png)

# Site aim

This website is created as a memory game where the user has to remember a sequence of colours displayed.

There are 2 levels and 5 games in each level with each game and level getting progressively more tricky.

This site is created using 3 languages: HTML, CSS and JavaScript.

This is the second of 5 projects as part of the Diploma in Software Development from Codeinstitute.

A link to the live website can be found here:

https://alyt89.github.io/Milestone-Project-2-JavaScript/game.html


# User goals

The website is expected to attract users who:

- Enjoy memory games without being too complex.

- Want to enjoy a quick, fun and easy game.





The website will allow users to:

- Progress through the games and levels and see if they can get a good score.

- With future enhancements compete against others to get higher up the leaderboard.


## Requirements

This project required creating an interactive website and documenting its progress through GitHub. Interactive elements through the use of JavaScript were required as part of the project.

## Color scheme

The colour scheme on the project is quite retro in look. With the game itself being based on 4 primary colours (red, green, blue and yellow) the backdrop was set as black and white to provide a distinct contrast.

The colours are stored as variables in the CSS file and used throughout from these variables.


## Fonts

The fonts used were taken from Google Fonts and applied throughout the project.

The font used for headings was IBM Plex Mono.

# Site features

## Intro / Game rules page

## Game page

### Main Game Area



### Game Info details





### Final Score



### Footer

- Link to GitHub profile added at bottom of page.



# Testing

## HTML validator

The HTML on all pages was validated by testing through https://validator.w3.org/#validate_by_input with no errors found as shown below:

![Responsive screenshot]

## CSS validator

CSS validation was done via Jigsaw validator on the following link with no errors found: https://jigsaw.w3.org/css-validator/#validate_by_input

![Responsive screenshot]

## JS Hint

JavaScript validator (JS Hint) used to check the javascript and this returned the following warnings regarding use of const and let keywords (compatability with certain extensions) and template literals (again re compatability with certain extensions).

## Lighthouse

Testing was done via Lighthouse and scored as below on Desktop and Mobile:

### Desktop:

![Responsive screenshot]


### Mobile:

![Responsive screenshot]


The site has been tested on Google Chrome, FireFox and Microsoft Edge. It has also been tested on a mobile device to check the responsiveness.

Throughout the development of the site I have used Google DevTools to ensure that the responsiveness is working and any bugs encountered are identified during development.

There have been regular commits to github with clear remarks on each update to easily track progress of the project.

All links both internal and external have been tested and any external links open in a new tab to maintain good user experience.

The site has also been tested by an impartial user to test for intuitiveness, ease of use and layout/visibility issues. One issue raised from this was the text contrast on one of the visual links and this was subsequently resolved by increasing opacity/constrast.

## Main issues discovered and resolved

1. Duplicate colours in list

- I wanted the game to include the option of the same colour being displayed consecutively in the array however when this was displayed in the "colour-display" div since there was no gap between each element in the array it wasn't clear that 2 consecutive colours of the same value were 2 rather than 1.

- Initial attempt was to utilise setTimeOut or setInterval function to create a delay and reset innerHTML to "" (blank text) but this was asynchronous.

- This was fixed by adding empty strings to the array after every other colour and registering the user's answers with an empty string after each guess also.

2. Disabling click events and submit button while colours displayed

- While the colour sequence was being displayed users could start clicking the buttons in real time and therefore cheat rather than memorise the sequence.

- This was fixed by using the setTimeOut function to delay the 4 colour buttons and submit button until the sequence had finished. 





# Deployment

This project was hosted and deployed on GitHub, steps taken to deploy are as follows:

- Open relevant GitHub repository and navigate to 'Settings' tab.

- Navigate to 'Pages' option located in the 'Code and Automation' section 

- Under 'Source' heading select the main branch and 'root' folder, once done click 'save'

- Refresh page until the active URL is provided


# Future site enhancements

- More levels with increased speed and longer lists of colours to remember.

- Higher levels could introduce a random font colour to each entry to further challenge the user so they would have to memorise the colour of the font and not the word displayed or vice versa.

- A leaderboard and/or a history of prior attempts by the user.

# Credits

Through the development of this site I have used various resources to help me especially when applying the Grid and Flexbox principles, the guidance on https://css-tricks.com/snippets/css/a-guide-to-flexbox/ and https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template were particularly helpful for this.

In addition I have used the W3Schools website to assist with general HTML and CSS queries such as Z-index and position.

Specific credits are noted in the CSS file for animations on the home and gallery pages.

## Images

Images were sourced from a combination of https://unsplash.com/ and Google Images. As Ski Cross is quite a unique sport there were limited images for specific elements of Ski Cross that were required for the gallery page and therefore Google Images was required.
