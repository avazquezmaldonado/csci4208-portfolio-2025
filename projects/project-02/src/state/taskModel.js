export class Task {
  constructor({ id, title, done = false, createdAt = Date.now() }) {
    this.id = id;
    this.title = title;
    this.done = done;
    this.createdAt = createdAt;
  }
}