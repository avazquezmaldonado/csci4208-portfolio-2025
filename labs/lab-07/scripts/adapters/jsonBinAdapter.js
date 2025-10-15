// scripts/adapters/jsonBinAdapter.js
// Persistent adapter (JSONBin) – Same contract: load(), save(next), reset(), snapshot()

import { seedDoc } from "../model.js";

export class JsonBinAdapter {
  #binId;
  #root;
  #stampOnSave;
  #allowReset;

  constructor({ binId, root = "https://api.jsonbin.io/v3", stampOnSave = true, allowReset = false } = {}) {
    if (!binId) throw new Error("JsonBinAdapter: 'binId' is required.");
    this.#binId = binId;
    this.#root = root.replace(/\/+$/, "");
    this.#stampOnSave = stampOnSave;
    this.#allowReset = allowReset;

    this.load = this.load.bind(this);
    this.save = this.save.bind(this);
    this.reset = this.reset.bind(this);
    this.snapshot = this.snapshot.bind(this);
  }

  // latest and write URLs
  #urlLatest() { return `${this.#root}/b/${this.#binId}/latest?meta=false`; }
  #urlBin()    { return `${this.#root}/b/${this.#binId}`; }

  // stamp revision metadata
  #stamp(d) {
    d.rev = (d.rev ?? 0) + 1;
    d.updatedAt = new Date().toISOString();
  }

  // read current remote document
  async #readLatest() {
    const res = await fetch(this.#urlLatest());
    if (!res.ok) throw new Error(`JSONBin read failed: ${res.status}`);
    return res.json();
  }

  // write updated document
  async #write(next) {
    const res = await fetch(this.#urlBin(), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next),
    });
    if (!res.ok) throw new Error(`JSONBin write failed: ${res.status}`);
  }

  // public API
  async load() {
    return await this.#readLatest();
  }

  async save(next) {
    const remote = await this.#readLatest();
    if (remote.rev > (next.rev ?? 0))
      throw new Error("Remote is newer; reload/merge before saving.");

    if (this.#stampOnSave) this.#stamp(next);
    await this.#write(next);
  }

  reset() {
    if (!this.#allowReset) throw new Error("Reset disabled for this adapter.");
    const fresh = seedDoc();
    return this.save(fresh);
  }

  snapshot() {
    return structuredClone(seedDoc());
  }
}

// export factory (tests call jsonBinAdapter(binId))
export function jsonBinAdapter(binId) {
  return new JsonBinAdapter({ binId });
}