// view.js
import Question from "./components/Question.js";
import HUD from "./components/HUD.js";
import Skip from "./components/Skip.js";
import Leaderboard from "./components/Leaderboard.js";
import LeaderMenu from "./components/LeaderMenu.js";

const renderDOM = (html) => {
  const el = document.getElementById("view");
  el.innerHTML = html;
};

const isTop5 = (score, top5) => top5.some((item) => item.score < score);

export const StartMenu = (props) => {
  const { timer, score, topScores } = props;
  renderDOM(
    `${HUD(timer, score)}
     ${Leaderboard(topScores)}
     <hr>
     <button onclick='createGame()'>Play</button>`
  );
};

export const PlayScene = (props) => {
  const { trivia, timer, score } = props;
  renderDOM(`${HUD(timer, score)}${Question(trivia)}${Skip()}`);
};

export const GameoverScene = (props) => {
  const { timer, score, topScores } = props;
  renderDOM(
    `${HUD(timer, score)}
     ${isTop5(score, topScores) ? LeaderMenu() : ""}
     <h1>Game Over!</h1>
     <button onclick='start()'>Start Menu</button>`
  );
};