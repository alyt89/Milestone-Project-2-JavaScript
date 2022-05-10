const colours = ["green", "yellow", "blue", "red"];
const redButton = document.getElementById("red-button");
const yellowButton = document.getElementById("yellow-button");
const greenButton = document.getElementById("green-button");
const blueButton = document.getElementById("blue-button");
const startGame = document.getElementById("start-game");
const nextGameButton = document.getElementById("next-game");
const submitButton = document.getElementById("submit-button");
const colourDisplayText = document.getElementById("colour-display-text");
const colourDisplay = document.getElementById("colour-display");
const notStarted = "Colours will appear here. Ready? Click Start.";
let i = 0;
let gameNumber;
let gameLength;
let userAnswer = [];
let oldScore = 0;
let gamesPlayed = 0;


function pickRandomColours() {
    i = 0;
    colourDisplay.style.background =  `repeating-linear-gradient(to right,var(--black) 10px,
        var(--grey) 20px,
        var(--black) 10px
      )`;
    gameNumber = parseInt(document.getElementById("game-no").innerText);
    console.log(gameNumber);
    gameLength = 6 + gameNumber;
    console.log(gameLength);
    let coloursList = [];
    while (i < gameLength) {
    coloursList.push(colours[Math.floor(Math.random() * 4)]);
    coloursList.push("");
    i++;
    }
    newColoursList = coloursList;
    console.log(newColoursList);
    displayColours();
    intervalGap();
    return coloursList;
}

function startGameClick() {
    colourDisplayText.innerHTML = "";  
    startGame.style.visibility = "hidden";

    if (colourDisplayText.innerHTML === notStarted) {
        console.log("game not started");
    }
  
    else {
        pickRandomColours();
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
   

/** To prevent user clicking buttons as the array is being displayed and therefore cheating. 
 * Code referenced on site https://stackoverflow.com/questions/11363401/javascript-how-to-clear-interval-after-specific-time 
 * 
*/

function intervalGap(){
    let no = 1;
    setInterval(function(){
    if(no < newColoursList.length){
        no++;
    }else{
    clearInterval(this);
    greenButton.addEventListener("click", registerGreenButtonClick);
    redButton.addEventListener("click", registerRedButtonClick);
    yellowButton.addEventListener("click", registerYellowButtonClick);
    blueButton.addEventListener("click", registerBlueButtonClick);


    }}, 100); // buttons enabled after the time taken to display the array in colour display area
}



startGame.addEventListener("click", startGameClick);
startGame.addEventListener("click", displayColours);
startGame.addEventListener("click", intervalGap)


submitButton.addEventListener("click", checkAnswer);



function registerGreenButtonClick() {
    console.log("green button clicked");
    userAnswer.push("green");
    userAnswer.push("");
    console.log(userAnswer);
}

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

function checkAnswer() {
    let isSame = newColoursList.length == userAnswer.length && newColoursList.every(function(element, index) {
        return element === userAnswer[index];
    });

    if (isSame) {
        console.log("correct answer");
        colourDisplay.style.background = "green";
        colourDisplayText.innerHTML = "CORRECT!";

        increaseScore();
    }
     else {
         console.log("incorrect answer");
         colourDisplay.style.background = "red";
         colourDisplayText.innerHTML = "INCORRECT :( ";
         nextGame();
        }
     ;
};


function increaseScore() {
    let oldScore = parseInt(document.getElementById("correct-attempts").innerText);
    document.getElementById("correct-attempts").innerText = ++oldScore;
    nextGame();

}

function nextGame() {
    let currentGame = parseInt(document.getElementById("attempts").innerText);
    document.getElementById("attempts").innerText = ++currentGame;
    document.getElementById("game-no").innerText = ++gameNumber;
    startGame.innerHTML = "Next Game";
    startGame.style.visibility = "visible";
   userAnswer = [];
};


