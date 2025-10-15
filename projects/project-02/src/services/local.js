export class Local {
  constructor(key) {
    this.key = key;
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem(this.key) || "null");
    } catch {
      return null;
    }
  }

  save(doc) {
    localStorage.setItem(this.key, JSON.stringify(doc));
  }
}