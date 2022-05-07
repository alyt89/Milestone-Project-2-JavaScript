const colours = ["green", "yellow", "blue", "red"];
const redButton = document.getElementById("red-button");
const yellowButton = document.getElementById("yellow-button");
const greenButton = document.getElementById("green-button");
const blueButton = document.getElementById("blue-button");
const startGame = document.getElementById("start-game");
const colourDisplayText = document.getElementById("colour-display-text");
const notStarted = "Colours will appear here. Ready? Click Start.";
let i = 0;
let gameNumber;
let gameLength;


function pickRandomColours() {
    gameNumber = document.getElementById("game-no").innerText;
    console.log(gameNumber);
    gameLength = 6 + parseInt(gameNumber);
    console.log(gameLength);
    let coloursList = [];
    while (i < gameLength) {
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

    if (colourDisplayText.innerHTML === notStarted) {
        console.log("game not started");
    }
  
    else {
        displayColours();
    }
}


function displayColours() {
    
console.log(newColoursList);

    let interval = 1000;   
 

    newColoursList.forEach(function(el, index) {

        setTimeout(function() {
            colourDisplayText.innerHTML = el;
        }, index * interval);
        timeElapsed = (index * interval);
        
    });

    console.log(timeElapsed);


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


