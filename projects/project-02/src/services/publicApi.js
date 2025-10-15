const CACHE_KEY = "tasktrack-public-cache";
const TTL_MS = 30 * 60 * 1000;
const URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";

export async function fetchPublicTodos() {
  const now = Date.now();
  try {
    const cache = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
    if (cache && now - cache.ts < TTL_MS) return cache.data;

    const res = await fetch(URL);
    if (!res.ok) throw new Error("Public GET failed.");
    const data = await res.json();

    localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: now, data }));
    return data;
  } catch {
    return [];
  }
}