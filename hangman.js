var inquirer = require("inquirer");

var currentword = require("./word.js");
var letter = require('./letter.js');

function startGame() {
    console.log("Hangtight!");
    guessesRemaining = 10;
    answerspaces = [];
    currentLetter = [];
    guessedLetter = [];
    flip = false;

    // create a function that replaces the underscores for letters
    word = function() {
        
    }
}