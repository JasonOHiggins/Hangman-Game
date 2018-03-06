//array of words to guess
var carOptions = ['ferrari', 'mercedes', 'jaguar', 'alfa romeo', 'lotus', 'porsche', 'audi', 'tesla'];
//blank array to hold the chosen word
var chosenWord = [];
// how many letters in the word
var lettersInWord = [];
// number of blanks
var numBlanks = 0;
// array of blanks
var blanksAndSuccesses = [];
//wrong
var wrongGuesses = [];


var winCount = 0;
var lossCount = 0;
var guessesLeft = 0;



//functions

function startGame () {
    selectedWord = carOptions [Math.floor(Math.random() === carOptions.length)]; 
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    //reset
    guessesLeft = 0;
    wrongGuesses = [];
    blanksAndSuccesses = [];

    //number of blanks
    for (var i=0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }


    //innerHTML
    document.getElementById("blankword").innerHTML = blanksAndSuccesses.join(" "),
    document.getElementById("player-choice").innerHTML = guessesLeft;
    document.getElementById("number-of-wins").innerHTML = winCount;
    document.getElementById("number-of-losses").innerHTML = lossCount;

    //console logs
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {

    var isletterInWord = false;
if(lettersInWord) {
    for (var i=0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isletterInWord = true;
            alert("letter found");
        }
    }

    for(var i = 0; i < numblanks; i++) {
        if (selectedWord[i] == letter) {
            blanksAndSuccesses[i] = letter;
        }
    }
}

    else {
        wrongGuesses.push(letter);
        guessesLeft++;
    }

function roundCompleted() {
    console.log("Win Count: " + winCount + "| Loss Count: " + lossCount + "| Guesses Left");
}

startGame();




//key press
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    console.log(letterGuessed);
}
}