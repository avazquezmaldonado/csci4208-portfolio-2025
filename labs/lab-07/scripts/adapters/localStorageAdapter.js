//implement this file
import { seedDoc } from "../model.js";

export class LocalStorageAdapter {
  constructor(key = "lab07-doc", { stampOnSave = true } = {}) {
    this._key = key;
    this._doc = null;
    this._stampOnSave = stampOnSave;
  }

  _stamp(d) {
    d.rev = (d.rev ?? 0) + 1;
    d.updatedAt = new Date().toISOString();
  }

  async load() {
    const json = localStorage.getItem(this._key);
    if (!json) {
      const d = seedDoc();
      localStorage.setItem(this._key, JSON.stringify(d));
      this._doc = d;
      return d;
    }
    const d = JSON.parse(json);
    this._doc = d;
    return d;
  }

  async save(next) {
    if (this._stampOnSave) this._stamp(next);
    localStorage.setItem(this._key, JSON.stringify(next));
    this._doc = next;
  }

  reset() {
    localStorage.removeItem(this._key);
    this._doc = null;
  }

  snapshot() {
    return structuredClone(this._doc);
  }
}

export const localStorageAdapter = new LocalStorageAdapter();