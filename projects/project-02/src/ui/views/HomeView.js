import { TaskForm } from "../components/TaskForm.js";
import { TaskList } from "../components/TaskList.js";
import { qs } from "../../utils/dom.js";

export class HomeView {
  constructor(ctx) {
    this.ctx = ctx;
  }

  render() {
    const root = qs("#app");
    root.innerHTML = "";
    const form = TaskForm({
      onAdd: title => {
        this.ctx.store.addTask(title);
        this.render();
      }
    });
    const list = TaskList({
      tasks: this.ctx.store.tasks,
      onToggle: id => {
        this.ctx.store.toggleTask(id);
        this.render();
      },
      onRemove: id => {
        this.ctx.store.removeTask(id);
        this.render();
      }
    });
    root.append(form, list);
  }
}