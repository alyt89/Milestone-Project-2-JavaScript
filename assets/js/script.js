const colours = ["green", "yellow", "blue", "red"];

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
let fourRandomColours = pickFourRandomColours();

let redButton = document.getElementById("red-button");
redButton.addEventListener("click", pickFourRandomColours)