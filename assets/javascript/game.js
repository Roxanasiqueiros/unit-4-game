let letters = ["a", "b", "c"]

let guessedLetters = [];

let lettersToGuess = null;

let guessLeft = 9;

let wins = 0;

let losses = 0;

const updateGuessLeft = () => {
    document.querySelector("#guesses-left").innerHTML = guessLeft;
}

const updateLetterToGuess = () => {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
}

const updateGuessesSoFar = () => {
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(",");
}

const reset = () => {
    guessLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessLeft();

document.onkeydown = (event) => {
    guessLeft--;
    let letter = event.key.toLowerCase();
    // Then its going to add the guess into the array
    guessedLetters.push(letter);

    updateGuessLeft();
    updateGuessesSoFar();

    if (letter === letterToGuess) {
        wins++;
        document.querySelector("wins").innerHTML = wins;
        reset();
    }

    if(guessLeft === 0) {
        losses++;
        document.querySelector("losses").innerHTML = losses;


    }

}



