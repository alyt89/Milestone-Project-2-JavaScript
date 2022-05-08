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
let userAnswer = [];

function pickRandomColours() {
    gameNumber = document.getElementById("game-no").innerText;
    console.log(gameNumber);
    gameLength = 6 + parseInt(gameNumber);
    console.log(gameLength);
    let coloursList = [];
    while (i < gameLength) {
    coloursList.push(colours[Math.floor(Math.random() * 4)]);
    coloursList.push("");
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
    
    let interval = 1000;   

    newColoursList.forEach(function(el, index) {

        setTimeout(function() {
            colourDisplayText.innerHTML = el;
        }, index * interval);
        
    });

}
   



startGame.addEventListener("click", startGameClick);
startGame.addEventListener("click", displayColours);
greenButton.addEventListener("click", registerGreenButtonClick)
redButton.addEventListener("click", registerRedButtonClick)
yellowButton.addEventListener("click", registerYellowButtonClick)
blueButton.addEventListener("click", registerBlueButtonClick)


function buttonClicked() {

}

function registerGreenButtonClick() {
    console.log("green button clicked");
    userAnswer.push("green");
    userAnswer.push("");
    console.log(userAnswer);
    

}

;

function registerBlueButtonClick() {
    console.log("blue button clicked");
    userAnswer.push("blue");
    userAnswer.push("");
    console.log(userAnswer);

};

function registerYellowButtonClick() {
    console.log("yellow button clicked");
    userAnswer.push("yellow");
    userAnswer.push("");
    console.log(userAnswer);


};

function registerRedButtonClick() {
    console.log("red button clicked");
    userAnswer.push("red");
    userAnswer.push("");
    console.log(userAnswer);

};

// function checkAnswer();

// function displayResult();

// function increaseScore();

// function nextGame();


