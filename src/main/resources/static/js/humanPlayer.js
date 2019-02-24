var initial = 0;
var currentx = 30;
var currenty = 40;

var userWord;
var userGuesses = [];
var greenLetters = [];
var redLetters = [];

var compWord = "tiger"; // TEMP VAR

function compareLetter(guess, compWord, index) {
    var i;
    for (i = 0; i < 5; i++) {
        if (guess[index] === compWord[i]) {
            return true;
        }
    }
    return false;
}

function letterSearch(letter, array) {
    var i;
    for (i = 0; i < array.length; i++) {
        if (letter === array[i]) {
            return true;
        }
    }
    // if letter not in array
    return false;
}

function addWordToCanvas(text) {
    //Setting up the canvas and the text to be black
    var canvas = document.getElementById("humanCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "20px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    //logistics for placing the words in the canvas
    var xposition = currentx + length;
    xposition = xposition * 4;
    // if it is the first time entering it is an intital word
    if (initial == 0) {
        ctx.fillText("YOUR WORD: " + text, xposition, currenty);
        //User's word defined
        userWord = text;
    } else {
        // else it is a guess
        // Append to array of guesses
        userGuesses.push(text);
        // Compare each letter with letters in computer word
        var numLetters = 0;
        var i;
        for (i = 0; i < 5; i++) {
            if (compareLetter(text, compWord, i) == 1){
                numLetters++;
                if (letterSearch(text[i], greenLetters) == false) {
                    greenLetters.push(text[i]);
                }
            } else {
                if (letterSearch(text[i], redLetters) == false) {
                    redLetters.push(text[i]);
                }
            }
        }
        // display "guess - num"
        ctx.fillText("GUESS: " + text + " - " + numLetters, xposition, currenty);
        if(text.localeCompare(compWord) == 0){
            // you win
            ctx.fillText("YOU WIN!", xposition, currenty);
        }
    }
    // logistics for scrolling
    currentx += 0;
    currenty += 40;
    initial = 1;

    console.log(userWord);
    console.log(compWord);
    console.log(userGuesses);
    console.log(greenLetters);
    console.log(redLetters);
}
