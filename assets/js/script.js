const colours = ["green", "yellow", "blue", "red"];
const redButton = document.getElementById("red-button");
const yellowButton = document.getElementById("yellow-button");
const greenButton = document.getElementById("green-button");
const blueButton = document.getElementById("blue-button");
const startGame = document.getElementById("start-game");
const colourDisplayText = document.getElementById("colour-display-text");
const notStarted = "Colours will appear here. Ready? Click Start.";


function pickRandomColours() {
    let i = 0;
    let coloursList = [];
    while (i < 6) {
    coloursList.push(colours[Math.floor(Math.random() * 4)]);
    i++;
    }
    console.log(coloursList);
    return coloursList;
}

newColoursList = pickRandomColours();

function startGameClick() {
    colourDisplayText.innerHTML = "";  
    startGame.style.visibility = "hidden";
  
    
}

function displayColours() {

    if (colourDisplayText.innerHTML === notStarted) {
        console.log("game not started");
    }

    else {
        while (newColoursList.length > 0) {
            firstColour = newColoursList.shift();
            colourDisplayText.innerHTML = firstColour;
            console.log(firstColour);
            }
        }
    
}




startGame.addEventListener("click", startGameClick);
startGame.addEventListener("click", displayColours);

// function registerGreenButtonClick();

// function registerBlueButtonClick();

// function registerYellowButtonClick();

// function registerRedButtonClick();

// function checkAnswer();

// function displayResult();

// function increaseScore();

// function nextGame();


