import { fetchPublicTodos } from "../../services/publicApi.js";
import { qs } from "../../utils/dom.js";

export class AnalyticsView {
  constructor(ctx) {
    this.ctx = ctx;
  }

  async render() {
    const root = qs("#app");
    root.innerHTML = `<p class="muted">Loading public data...</p>`;
    const data = await fetchPublicTodos();

    root.innerHTML = `
      <div class="card">
        <h2>Public Data (GET)</h2>
        <p class="muted">Showing ${data.length} items.</p>
        <ul id="list"></ul>
      </div>
      <div class="card">
        <h2>Your Summary</h2>
        <pre>${JSON.stringify(this.ctx.store.summary(), null, 2)}</pre>
        <p class="muted">Click Save to send to JSONBin.</p>
      </div>
    `;
    const ul = root.querySelector("#list");
    data.forEach(d => {
      const li = document.createElement("li");
      li.textContent = `#${d.id} - ${d.title}`;
      ul.appendChild(li);
    });
  }
}