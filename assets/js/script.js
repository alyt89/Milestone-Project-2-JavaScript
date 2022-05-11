//  variables declared for use throughout the document 

const colours = ["green", "yellow", "blue", "red"];
const redButton = document.getElementById("red-button");
const yellowButton = document.getElementById("yellow-button");
const greenButton = document.getElementById("green-button");
const blueButton = document.getElementById("blue-button");
const startGame = document.getElementById("start-game");
const submitButton = document.getElementById("submit-button");
const colourDisplayText = document.getElementById("colour-display-text");
const colourDisplay = document.getElementById("colour-display");
const gameContainer = document.getElementById("game-container");
let interval = 1000;
let levelNumber = parseInt(document.getElementById("level").innerText);
let i = 0;
let newColoursList;
let gameNumber;
let gameLength;
let userAnswer = [];

/** Depending on the game number the function will generate an array with a varying length and a random combination of the four colours included in the "colours" variable. These are then set to a new variable called newColoursList */

function pickRandomColours() {
    i = 0;
    colourDisplay.style.background =  `repeating-linear-gradient(to right,var(--black) 10px,
        var(--grey) 20px,
        var(--black) 10px
      )`;
    gameNumber = parseInt(document.getElementById("game-no").innerText);
    gameLength = 4 + gameNumber;
    let coloursList = [];
    while (i < gameLength) {
    coloursList.push(colours[Math.floor(Math.random() * 4)]);
    coloursList.push("");
    i++;
    }
    newColoursList = coloursList;
    displayColours();
    intervalGap();
    return coloursList;
}

// Global Scope Event Listeners for the startGame button

startGame.addEventListener("click", startGameClick);
startGame.addEventListener("click", displayColours);
startGame.addEventListener("click", intervalGap);

/** Initiates the pickRandomColours function and is deployed once the user is ready to begin the next game. Also removes the click events on the coloured buttons to stop the user from accidentally submitting answers too early. */


function startGameClick() {
    colourDisplayText.innerHTML = "";  
    startGame.style.visibility = "hidden";
    greenButton.removeEventListener("click", registerGreenButtonClick);
    blueButton.removeEventListener("click", registerBlueButtonClick);
    yellowButton.removeEventListener("click", registerYellowButtonClick);
    redButton.removeEventListener("click", registerRedButtonClick);
    submitButton.removeEventListener("click", checkAnswer);
    greenButton.style.opacity = "0.5";
    blueButton.style.opacity = "0.5";
    yellowButton.style.opacity = "0.5";
    redButton.style.opacity = "0.5";
    pickRandomColours();
}

/**  Displays the colours in the newColoursList array in order with a certain interval between each. The interval depends on the level with level 2 being twice the speed of level 1.
 * https://stackoverflow.com/questions/45498873/add-a-delay-after-executing-each-iteration-with-foreach-loop */

function displayColours() {
    newColoursList.forEach(function(el, index) {
        setTimeout(function() {
            colourDisplayText.innerHTML = el;
        }, index * (interval / levelNumber));  
    });
}
   
/** To prevent user clicking buttons as the array is being displayed and therefore cheating. 
 * Code referenced on site https://stackoverflow.com/questions/11363401/javascript-how-to-clear-interval-after-specific-time 
 * 
*/

function intervalGap() {
setTimeout(function(){
    greenButton.addEventListener("click", registerGreenButtonClick);
    blueButton.addEventListener("click", registerBlueButtonClick);
    redButton.addEventListener("click", registerRedButtonClick);
    yellowButton.addEventListener("click", registerYellowButtonClick);
    greenButton.style.opacity = "1";
    blueButton.style.opacity = "1";
    yellowButton.style.opacity = "1";
    redButton.style.opacity = "1";
    submitButton.addEventListener("click", checkAnswer);
        }, (newColoursList.length * (interval / levelNumber))); 
}

/** Function to register a click of the green button through the event listeners established in the intervalGap function. This pushes a string with the colour of the button clicked followe by an empty srting to the userAnswer array.  */

function registerGreenButtonClick() {
    userAnswer.push("green");
    userAnswer.push("");
    colourDisplayText.innerHTML = "green";
    setTimeout(function() {
        colourDisplayText.innerHTML = "";
    },200);
}

/** Function to register a click of the blue button through the event listeners established in the intervalGap function. This pushes a string with the colour of the button clicked followe by an empty srting to the userAnswer array.  */

function registerBlueButtonClick() {
    userAnswer.push("blue");
    userAnswer.push("");
    colourDisplayText.innerHTML = "blue";
    setTimeout(function() {
        colourDisplayText.innerHTML = "";
    },200);
}

/** Function to register a click of the yellow button through the event listeners established in the intervalGap function. This pushes a string with the colour of the button clicked followe by an empty srting to the userAnswer array.  */

function registerYellowButtonClick() {
    userAnswer.push("yellow");
    userAnswer.push("");
    colourDisplayText.innerHTML = "yellow";
    setTimeout(function() {
        colourDisplayText.innerHTML = "";
    },200);
}

/** Function to register a click of the red button through the event listeners established in the intervalGap function. This pushes a string with the colour of the button clicked followe by an empty srting to the userAnswer array.  */

function registerRedButtonClick() {
    userAnswer.push("red");
    userAnswer.push("");
    colourDisplayText.innerHTML = "red";
    setTimeout(function() {
        colourDisplayText.innerHTML = "";
    },200);
}

/** Compares the array generated by picking random colours (newColoursList) and the array generated by the user from the click event listeners on the coloured buttons. Code to compare arrays referenced on site https://sebhastian.com/javascript-compare-array/
 * 
*/

function checkAnswer() {
    let isSame = newColoursList.length == userAnswer.length && newColoursList.every(function(element, index) {
        return element === userAnswer[index];
    });
    if (isSame) {
        colourDisplay.style.background = "green";
        colourDisplayText.innerHTML = "CORRECT!";
        increaseScore();
    }
    else {
         colourDisplay.style.background = "red";
         colourDisplayText.innerHTML = "INCORRECT :( ";
         nextGame();
        }
}

/** Sets the old score as a variable of the content of the "correct-attempts" div and increments by one before triggering the nextgame function */

function increaseScore() {
    let oldScore = parseInt(document.getElementById("correct-attempts").innerText);
    document.getElementById("correct-attempts").innerText = ++oldScore;
    nextGame();
}

/** After user answer is submitted and checked the useranswer variable is reset to an empty array and the startgame div is made visible again replaced with the words "next game" instead */

function nextGame() {
    if (gameNumber === 5 && levelNumber != 2) {
        nextLevel();
    }
    else if (gameNumber === 5 && levelNumber === 2) {
        finalScore();
    }
    else {
        let currentGame = parseInt(document.getElementById("attempts").innerText);
        document.getElementById("attempts").innerText = ++currentGame;
        document.getElementById("game-no").innerText = ++gameNumber;
        startGame.innerHTML = "Next Game";
        startGame.style.visibility = "visible";
        userAnswer = [];
    }
}

/** Displays a popup window to indicate the next level is starting. Currently written with only 2 levels in mind, for future maintainability the variable levelTwo should be renamed to next level with template literals to substitute the correct level number as appropriate. */

function nextLevel() {
    setTimeout(function() {
        let levelTwo = document.createElement("div");
        gameContainer.appendChild(levelTwo);
        levelTwo.setAttribute("id","level-two");
        levelTwo.innerHTML = "Level 2";
        let levelTwoContinueButton = document.createElement("div");
        levelTwo.appendChild(levelTwoContinueButton);
        levelTwoContinueButton.setAttribute("id", "continue");
        levelTwoContinueButton.innerHTML = "Continue";
        levelTwoContinueButton.style.animationDelay = "2s";
        levelTwoContinueButton.addEventListener("click", closeNextLevel);
    },2000);

    function closeNextLevel() {
        let levelTwo = document.getElementById("level-two");
        levelTwo.remove();
        let currentGame = parseInt(document.getElementById("attempts").innerText);
        document.getElementById("attempts").innerText = ++currentGame;
        document.getElementById("level").innerText = ++levelNumber;
        document.getElementById("game-no").innerText = "1";
        gameNumber = 1;
        colourDisplay.style.background = "";
        colourDisplayText.innerHTML = "Colours will appear here. Ready? Click Start.";
        startGame.innerHTML = "Start";
        startGame.style.visibility = "visible";
    }
}

/** Displays a popup window to indicate the final score taken from the correct attempts and the number of games played. */

function finalScore() {
    setTimeout(function() {   
    let finalScoreDisplay = document.createElement("div");
    gameContainer.appendChild(finalScoreDisplay);
    finalScoreDisplay.setAttribute("id","final-score-display");
    let finalScore = parseInt(document.getElementById("correct-attempts").innerText);
    finalScoreDisplay.innerHTML = `Your Final score is ${finalScore} out of 10`;
    let playAgain = document.createElement("div");
    finalScoreDisplay.appendChild(playAgain);
    playAgain.setAttribute("id", "continue");
    playAgain.innerHTML = "Play Again";
    playAgain.style.animationDelay = "2s";
    playAgain.addEventListener("click", closeFinalScore);  
    },2000);

    function closeFinalScore() {
        let finalScoreDisplay = document.getElementById("final-score-display");
        finalScoreDisplay.remove();
        document.getElementById("game-no").innerText = "1";
        document.getElementById("level").innerText = "1";
        document.getElementById("attempts").innerText = "0";
        document.getElementById("correct-attempts").innerText = "0";
        gameNumber = 1;
        colourDisplay.style.background = "";
        colourDisplayText.innerHTML = "Colours will appear here. Ready? Click Start.";
        startGame.innerHTML = "Start";
        startGame.style.visibility = "visible";
    }
}