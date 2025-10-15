#Quiz Game

In this lab, you will build a Quiz Game with a Leaderboard.
See the lab document for further details. All starting files are contained within this repo.

# Lab 06 — REST Client (Open Trivia + JSONBin)

## What I built
A small client-side app that fetches questions from the Open Trivia DB (GET) and posts a simple summary payload to a public JSONBin (PUT). The app maintains local game state and shows loading/empty/error states. A basic HUD displays score and a 15-second timer per question.

## GET endpoint (Open Trivia DB)
- URL tested: `https://opentdb.com/api.php?amount=1&type=multiple`
- Returns one multiple-choice question at a time.

## PUT target (JSONBin)
- Public Bin (no secrets). I created a **public** bin on jsonbin.io.
- Replace the placeholder `BIN_ID` in `scripts/app.js` with my bin id.
- Payload example:
```json
{
  "type": "lab06_trivia_summary",
  "updated_ts": "2025-10-14T12:34:56Z",
  "data": { "score": 3, "total": 5 }
}