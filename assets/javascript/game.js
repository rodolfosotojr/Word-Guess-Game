//Create choices
var wordChoice = ['rick', 'walker', 'hershel'];
var randomArray = Math.floor(Math.random() * wordChoice.length);
var wordToGuess = wordChoice[randomArray];

// console.log(randomWord)
var wordGuess = document.getElementById("newWord");

//Place underscores for letter position

var selectedWord = null;
var underScore = [];
var lettersInWord = [];
var correctLetter = [];
var incorrectLetter = [];
var totalGuesses = 0;
var guessesLeft = 10;
var letterGuessed = null;
var wins = 0;

function replaceUnderScore() {
    for (var i = 0; i < wordToGuess.length; i++) {
        underScore.push('_');
    }
    return underScore;

}


wordGuess.textContent = replaceUnderScore();

console.log(underScore);


//Initiate game by pressing a key
function startGame() {
    lettersInWord = wordToGuess.split("");
    
}

console.log(lettersInWord);

// var userGuess = 0;
// document.onkeyup = function (event) {
//     var userGuess = event.key;
//     if (userGuess) === 
//     console.log (userGuess)
//     console.log(this.onkeyup);
// }


//When user presses key determine if key is part of the word
//If it is not part of the word, guessesRemaining goes down by 1
//After a missed guess by user, the letter already used is displayed
//If it is part of the word, override an underscore with the letter chosen
//If the user runs out of guesses, game ends
//If user chooses all correct letter, user wins

