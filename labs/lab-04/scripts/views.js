/* View: output rendering */
function printDigits() {
  document.getElementById("digit-100s").src = `assets/${guess.hundreds}.png`;
  document.getElementById("digit-10s").src  = `assets/${guess.tens}.png`;
  document.getElementById("digit-1s").src   = `assets/${guess.ones}.png`;
}

function printClue(status, num) {
  const [d100, d10, d1] = status === "HI" ? ["H", "I", "-"] : ["L", "O", "-"];
  document.getElementById("digit-100s").src = `assets/${d100}.png`;
  document.getElementById("digit-10s").src  = `assets/${d10}.png`;
  document.getElementById("digit-1s").src   = `assets/${d1}.png`;
  then = Date.now(); // reset timer baseline
}

function printAttemptsRemaining() {
  const attemptsText = document.getElementById("attempts");
  attemptsText.innerHTML = `<h2>Time left: ${timeLeft}</h2>`;
}

function printGameOver(status) {
  let message;
  if (status === "WIN") {
    message = `<h1>You Win!</h1><p>Got it in ${30 - timeLeft} seconds.</p>`;
  } else {
    message = `<h1>You Lose!</h1><p>The number was: ${passcode}</p>`;
  }
  document.body.innerHTML = message;
}