export function TaskForm({ onAdd }) {
  const el = document.createElement("div");
  el.className = "card";
  el.innerHTML = `
    <form class="row" id="task-form">
      <input id="task-title" type="text" placeholder="Add a task..." />
      <button type="submit">Add</button>
    </form>
  `;
  el.querySelector("#task-form").addEventListener("submit", e => {
    e.preventDefault();
    const title = el.querySelector("#task-title").value;
    onAdd(title);
    el.querySelector("#task-title").value = "";
  });
  return el;
}