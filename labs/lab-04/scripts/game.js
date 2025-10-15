// Game data
const passcode = Math.floor(Math.random() * 1000);
let tries = 10;

// DOM references
const number = document.getElementById("guess-text");
const button = document.getElementById("guess-button");
const attemptsView = document.getElementById("attempts");
const cluesView = document.getElementById("clues");

// Event listener
button.addEventListener("click", guessNumber);

// Main logic
function guessNumber() {
  const guess = parseInt(number.value);
  tries--;
  attemptsView.innerHTML = `Number of attempts left: ${tries}`;

  if (guess === passcode) {
    document.body.innerHTML = `<h1>You Win!</h1><p>Got it in ${10 - tries} attempts.</p>`;
  } else if (tries <= 0) {
    document.body.innerHTML = `<h1>You Lose!</h1><p>The passcode was ${passcode}.</p>`;
  } else {
    giveClue(guess);
  }
}

// Clue logic
function giveClue(guess) {
  if (guess > passcode) {
    cluesView.innerHTML += `<li>${guess} is too High!</li>`;
  } else {
    cluesView.innerHTML += `<li>${guess} is too Low!</li>`;
  }
}