# TaskTrack — Local-First Task Manager (SPA)

A lightweight, offline-friendly task tracker. Add and complete tasks directly in the browser; your data persists locally. An analytics view shows totals and can save a small summary to a public JSONBin.

## Features
- Add, complete, and delete tasks
- Autosave to `localStorage`; restores on relaunch (works offline)
- Analytics view with quick summary (total vs. done)
- Public GET (sample data) with 30-minute TTL cache
- One-click cloud save: writes a small, non-sensitive summary to JSONBin

## Screenshots / Demo
> Place screenshots or GIFs under `docs/media/` and update below when available.

- ![Home](docs/media/home.png)
- ![Analytics](docs/media/analytics.png)
- Demo video (60–120s): <ADD_LINK_HERE>

## Live Demo / Install & Run
- **Live demo (GitHub Pages):** https://<your-username>.github.io/<repo-name>/
  - (SPA uses hash routing so deep links work.)
- **Local run (fallback):**
  1. Open the folder in VS Code
  2. Use the “Live Server” extension or run `npx http-server .`
- **Requirements:** Designed for 1280×720+; tested on Chrome and Edge.

## How It Works (High-Level)
- **Rendering stack:** DOM/Components (Vanilla). Simple reusable components and views; no external framework.
- **Architecture in brief:**
  - `Store` (class) manages task state and persistence
  - Views (`HomeView`, `AnalyticsView`) render UI from state
  - `Router` switches views via URL hash (`#/` and `#/analytics`)
  - Components: `TaskForm`, `TaskList` handle user interaction
- **Local-first behavior:** All tasks are saved to `localStorage` on change. When reopened, the app restores tasks before any network calls.

## Data & Networking (High-Level)
- **Public GET (cached 30 min):**  
  Endpoint — `https://jsonplaceholder.typicode.com/todos?_limit=5`  
  Example response:
  ```json
  [
    { "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false },
    ...
  ]