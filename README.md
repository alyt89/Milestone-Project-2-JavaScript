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

This project required creating an interactive website and documenting its progress through GitHub. Interactive elements through the use of JavaScript were also required as part of the project.

## Color scheme

The colour scheme on the project is quite retro in look. With the game itself being based on 4 primary colours (red, green, blue and yellow) the backdrop was set as black and white to provide a distinct contrast.

The colours are stored as variables in the CSS file and used throughout from these variables.


## Fonts

The fonts used were taken from Google Fonts and applied throughout the project.

The font used for headings was IBM Plex Mono. I wanted the game to have a 90s/retro feel and keep everything visually quite simplistic.

# Site features

## Main Title

- The title and tagline is displayed on both pages and has the largest font to be clear the name of the game and the basic principle of it.

## Intro / Game rules page

![Responsive screenshot](/assets/images/colour-recall-instructions-page.png)

- The index.html file is the initial page displaying the basic game instructions/rules. There is an animation effect to delay each set of instructions to dissuade the user from skipping forward without reading them. The continue button is a link to the main game page.

## Game page

### Main Game Area

![Responsive screenshot](/assets/images/colour-recall-main-game-area.png)

- The main game area is comprised of 4 main sections separated in grid format. The top has the game info details. Below is the colour display area where the text appears. The coloured buttons and start game button take up the most space in the centre of the main game area and at the bottom is the submit button.

### Coloured Buttons

- The Coloured buttons have CSS hover and click effects to be clear to the user when they are clicking or about to click a certain button. This is further reinforced by the name of the colour pressed being displayed in the colour display area when the user enters their answer.

- While the colour list is displayed the buttons (both coloured and submit) are reduced in opacity to limit the temptation to click them while the computer displays the random generated colour list.


### Game Info details

![Responsive screenshot](/assets/images/colour-recall-current-score.png)

![Responsive screenshot](/assets/images/colour-recall-level-game-number.png)

- As the user progresses through the game the score and game number are displayed in the top left and top right hand corners respectively.

### Final Score

![Responsive screenshot](/assets/images/colour-recall-final-score.png)

- The final score shares the same animation used to introduce the new level and provides the user's score and an option to play again which triggers a function to reset the values and start from level 1 game 1 again.

### Footer

![Responsive screenshot](/assets/images/colour-recall-social-media-link.png)

- The footer inclues a very basic link to my GitHub profile at the bottom of page.



# Testing

## HTML validator

The HTML on all pages was validated by testing through https://validator.w3.org/#validate_by_input with no errors found as shown below:

![Responsive screenshot](/assets/images/html-valildator-index-page.png)

![Responsive screenshot](/assets/images/html-valildator-game-page.png)

## CSS validator

CSS validation was done via Jigsaw validator on the following link with no errors found: https://jigsaw.w3.org/css-validator/#validate_by_input

![Responsive screenshot](/assets/images/css-validator.png)

## JS Hint

JavaScript validator (JS Hint) used to check the javascript and this returned the following warnings regarding use of const and let keywords (compatability with certain extensions) and template literals (again re compatability with certain extensions): https://jshint.com/.

Once the configuration was updated with new JavaScript features there were no errors or warnings returned.

![Responsive screenshot](/assets/images/js-hint.png)


## Lighthouse

Testing was done via Lighthouse and scored as below on Desktop and Mobile:

### Desktop:

![Responsive screenshot](/assets/images/desktop-lighthouse-report.png)


### Mobile:

![Responsive screenshot](/assets/images/mobile-lighthouse-report.png)


The site has been tested on Google Chrome, FireFox and Microsoft Edge. It has also been tested on a mobile device to check the responsiveness.

Throughout the development of the site I have used Google DevTools to ensure that the responsiveness is working and any bugs encountered are identified during development.

There have been regular commits to github with clear remarks on each update to easily track progress of the project.

Any external links open in a new tab and the site was tested by an impartial user for any intuitiveness, ease of use and layout/visibility issues. 

Feedback was that consecutive clicks of the same colour could be clearer to remove doubt whether 1, 2, 3 etc clicks were registered. The delay on flashing the user's answer was reduced as a result to mitigate this.

Other feedback was that it would be beneficial to the user to see the list of their guesses before submitting. This was added as a future enhancement.


## Main issues discovered and resolved

1. Displaying repeated colours in list

- I wanted the game to include the option of the same colour being displayed consecutively in the array however when this was displayed in the "colour-display" div since there was no gap between each element in the array it wasn't clear that 2 consecutive colours of the same value were 2 values rather than 1.

- Initial attempt was to utilise setTimeOut or setInterval function to create a delay and reset innerHTML to "" (blank text) but this was asynchronous.

- This was fixed by adding empty strings to the array after every other colour and registering the user's answers with an empty string after each guess also.

2. Disabling click events and submit button while colours displayed

- While the colour sequence was being displayed users could start clicking the buttons in real time and therefore cheat rather than memorise the sequence.

- This was fixed by using the setTimeOut function to delay the 4 colour buttons and submit button until the sequence had finished. 

# Deployment

This project was hosted and deployed on GitHub, steps taken to deploy are as follows:

- Open relevant GitHub repository and navigate to 'Settings' tab.

- Navigate to 'Pages' option located in the 'Code and Automation' section .

- Under 'Source' heading select the main branch and 'root' folder, once done click 'save'.

- Refresh page until the active URL is provided.


# Future site enhancements

- Show the list of guesses from the user before clicking submit.

- More levels with increased speed and longer lists of colours to remember.

- Higher levels could introduce a random font colour to each entry to further challenge the user so they would have to memorise the colour of the font and not the word displayed or vice versa.

- A leaderboard and/or a history of prior attempts by the user.

# Credits

Through development of the project I have used various sources to help with the code mostly in terms of the javascript.

Specific sources where code has been borrowed has been quoted directly in the code files.

- https://www.w3schools.com/default.asp. Various pages on the W3 Schools were used from reconfirming if/else loops and basic variable syntax.

- https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template As always provides reassurance on using the grid display which was used a good amount on the game.

- https://stackoverflow.com/ Various articles consulted which pointed me in the right direction for certain doubts regarding loops. Specific code that was referenced is mentioned in the JS file.

- Slack - Some doubts regarding certain Javascript use and scope of the project was helped by reading contributions by some of the other classmates doing projects with similar scope.

- Martina Terlevic - my mentor who gave me all the right tips to help clean up my project and reassure me I was on the right track. 

## Images

No images were used in the development of this project although the github icon has been used from fontawesome.com.
