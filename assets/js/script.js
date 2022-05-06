const colours = ["green", "yellow", "blue", "red"];
const redButton = document.getElementById("red-button");
const yellowButton = document.getElementById("yellow-button");
const greenButton = document.getElementById("green-button");
const blueButton = document.getElementById("blue-button");
const startGame = document.getElementById("start-game");

function pickFourRandomColours() {
    let i = 0;
    let coloursList = [];
    while (i < 4) {
    coloursList.push(colours[Math.floor(Math.random() * 4)]);
    i++;
    }
    console.log(coloursList);
    return coloursList;
}

startGame.addEventListener("click", startGameClick);

function startGameClick() {
    startGame.style.visibility = "hidden";
}