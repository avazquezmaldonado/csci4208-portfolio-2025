import { HomeView } from "../ui/views/HomeView.js";
import { AnalyticsView } from "../ui/views/AnalyticsView.js";

export class Router {
  constructor(ctx) {
    this.ctx = ctx;
    this.routes = {
      "": () => new HomeView(this.ctx).render(),
      "/": () => new HomeView(this.ctx).render(),
      "/analytics": () => new AnalyticsView(this.ctx).render(),
    };
  }

  start() {
    window.addEventListener("hashchange", () => this._render());
    this._render();
  }

  _render() {
    const hash = location.hash.replace(/^#/, "");
    const view = this.routes[hash] || this.routes["/"];
    view();
  }
}