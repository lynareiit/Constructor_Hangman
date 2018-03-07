var wordBank = [
    "jumanji",
    "scrabble",
    "monopoly",
    "clue",
    "applestoapples",
    "yahtzee",
    "sorry",
    "candyland",
    "trouble",

];

currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

module.exports = currentWord;

