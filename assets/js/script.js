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



startGame.addEventListener("click", startGameClick);
startGame.addEventListener("click", displayColours);
startGame.addEventListener("click", intervalGap);




function registerGreenButtonClick() {
    userAnswer.push("green");
    userAnswer.push("");
    colourDisplayText.innerHTML = "green";

    setTimeout(function() {
        colourDisplayText.innerHTML = "";
    },500);
}

function registerBlueButtonClick() {
    userAnswer.push("blue");
    userAnswer.push("");
    colourDisplayText.innerHTML = "blue";
    setTimeout(function() {
        colourDisplayText.innerHTML = "";
    },500);
}

function registerYellowButtonClick() {
    userAnswer.push("yellow");
    userAnswer.push("");
    colourDisplayText.innerHTML = "yellow";

    setTimeout(function() {
        colourDisplayText.innerHTML = "";
    },500);
}

function registerRedButtonClick() {
    userAnswer.push("red");
    userAnswer.push("");
    colourDisplayText.innerHTML = "red";

    setTimeout(function() {
        colourDisplayText.innerHTML = "";
    },500);
}

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


function increaseScore() {
    let oldScore = parseInt(document.getElementById("correct-attempts").innerText);
    document.getElementById("correct-attempts").innerText = ++oldScore;
    nextGame();

}

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