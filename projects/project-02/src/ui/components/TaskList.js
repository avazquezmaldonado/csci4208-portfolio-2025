export function TaskList({ tasks, onToggle, onRemove }) {
  const wrap = document.createElement("div");

  if (!tasks.length) {
    wrap.innerHTML = `<p class="muted">No tasks yet. Add one above.</p>`;
    return wrap;
  }

  tasks.forEach(t => {
    const row = document.createElement("div");
    row.className = "card row";
    row.innerHTML = `
      <label>
        <input type="checkbox" ${t.done ? "checked" : ""}/>
        <strong>${t.title}</strong>
      </label>
      <span class="muted">#${t.id}</span>
      <span style="flex:1"></span>
      <button class="remove">Delete</button>
    `;
    row.querySelector("input").addEventListener("change", () => onToggle(t.id));
    row.querySelector(".remove").addEventListener("click", () => onRemove(t.id));
    wrap.appendChild(row);
  });

  return wrap;
}