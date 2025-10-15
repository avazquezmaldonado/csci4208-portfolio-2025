import { Task } from "./taskModel.js";
import { Local } from "../services/local.js";
import { uid } from "../utils/uuid.js";

export class Store {
  constructor() {
    this.local = new Local("tasktrack-doc");
    this.tasks = [];
  }

  async boot() {
    const saved = this.local.load();
    this.tasks = Array.isArray(saved?.tasks)
      ? saved.tasks.map(t => new Task(t))
      : [];
    this._autosave();
  }

  _persist() {
    this.local.save({ tasks: this.tasks });
  }

  _autosave() {
    ["click","change","keyup"].forEach(ev =>
      window.addEventListener(ev, () => this._persist())
    );
    window.addEventListener("beforeunload", () => this._persist());
  }

  addTask(title) {
    if (!title.trim()) return null;
    const t = new Task({ id: uid(), title: title.trim() });
    this.tasks.push(t);
    this._persist();
    return t;
  }

  toggleTask(id) {
    const t = this.tasks.find(x => x.id === id);
    if (!t) return;
    t.done = !t.done;
    this._persist();
  }

  removeTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this._persist();
  }

  summary() {
    const total = this.tasks.length;
    const done = this.tasks.filter(t => t.done).length;
    return { ts: new Date().toISOString(), total, done };
  }
}