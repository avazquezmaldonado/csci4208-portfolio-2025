/* Model: core game logic + timer */
const passcode = Math.floor(Math.random() * 1000);
let tries = 10; // retained but unused in timer mode
const guess = new Guess();
let then = Date.now();
let timeLeft = 30;
let gameover = false;

function guessNumber(num) {
  if (gameover) return;
  if (num == passcode) {
    gameover = true;
    printGameOver("WIN");
  } else {
    giveClue(num);
  }
}

function giveClue(num) {
  if (num > passcode) {
    printClue("HI", num);
  } else {
    printClue("LO", num);
  }
}

/* main loop handles 1s tick & auto-refresh */
function main() {
  const now = Date.now();
  if (gameover) return;
  else if (timeLeft <= 0) {
    printGameOver("LOSE");
    gameover = true;
    return;
  } else if (now - then > 1000) {
    timeLeft--;
    printDigits();
    printAttemptsRemaining();
    then = Date.now();
  }
  requestAnimationFrame(main);
}
main();