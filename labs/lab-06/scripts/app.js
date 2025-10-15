// app.js
import * as http from "./http.js";
import * as view from "./view.js";

// constants
const GET_TRIVIA = `https://opentdb.com/api.php?amount=1&difficulty=easy`;
const BIN_ID = '605ed0fd9ab74a5f2bcc9c02';    // replace with your own
const GET_LEADERBOARD = `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`;
const PUT_LEADERBOARD = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

// state
const state = {
  score: 0,
  timer: 20,
  intervalId: null,
  trivia: null,
  topScores: []
};

// countdown
const countdown = () => {
  if (state.timer > 0) {
    state.timer--;
    view.PlayScene(state);
  } else {
    clearInterval(state.intervalId);
    view.GameoverScene(state);
  }
};

// play
window.playGame = async () => {
  const json = await http.sendGETRequest(GET_TRIVIA);
  [state.trivia] = json.results;
  view.PlayScene(state);
};

// check answer
window.checkAnswer = (attempt) => {
  const answer = state.trivia.correct_answer;
  if (attempt == answer) {
    state.score += state.timer;
    state.timer += 10;
    playGame();
  } else {
    clearInterval(state.intervalId);
    view.GameoverScene(state);
  }
};

// getTop5
const getTop5 = async (newScore) => {
  const leaderboardJSON = await http.sendGETRequest(GET_LEADERBOARD);
  const top5 = leaderboardJSON.record;
  top5.push(newScore);
  top5.sort((a, b) => b.score - a.score);
  top5.pop();
  return top5;
};

// update leaderboard
window.updateLeaderboard = async () => {
  const name = document.getElementById('name').value;
  const currentScore = { name: name, score: state.score };
  const top5 = await getTop5(currentScore);
  await http.sendPUTRequest(PUT_LEADERBOARD, top5);
  start();
};

// create game
window.createGame = () => {
  state.intervalId = setInterval(countdown, 1000);
  playGame();
};

// start
window.start = async () => {
  const leaderboardJSON = await http.sendGETRequest(GET_LEADERBOARD);
  state.topScores = leaderboardJSON.record;
  console.log(state.topScores);
  state.score = 0;
  state.timer = 20;
  view.StartMenu(state);
};

window.addEventListener("load", start);