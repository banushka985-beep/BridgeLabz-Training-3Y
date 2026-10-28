
"use strict";

let score = 50;
let gameStatus = "ready";

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(gameStatus);
}

console.log(score);
announce();
startGame();

const announceArrow = () => {
    console.log("Game started using arrow function");
};

announceArrow();
