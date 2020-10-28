/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

document.getElementById("btn__reset").addEventListener("click", () => {
    game.startGame();
});

const onScreenKeys = document.getElementsByClassName("key");

for (let i = 0; i < onScreenKeys.length; i++) {
    onScreenKeys[i].addEventListener("click", () => {
        game.handleInteraction();
    })
}
