/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {
        this.missed = 0;
        this.phrases = [new Phrase("How are you"), 
                        new Phrase("Thank you very much"),
                        new Phrase("Cowabunga dude"),
                        new Phrase("Pineapple pizza"),
                        new Phrase("A bird in hand is worth two in the bush")];
        this.activePhrase = null;
    }

    startGame() {
        document.getElementById("overlay").style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * Math.floor(this.phrases.length));
        return this.phrases[randomIndex];
    }

    handleInteraction() {

    }

    removeLife() {

    }

    checkForWin() {

    }

    gameOver() {

    }
}