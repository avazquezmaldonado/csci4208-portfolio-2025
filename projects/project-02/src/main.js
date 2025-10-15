import { Router } from "./routes/router.js";
import { Store } from "./state/store.js";
import { saveRunToCloud } from "./services/cloud.js";

const store = new Store();
await store.boot();

const router = new Router({ store });
router.start();

document.getElementById("btn-cloud-save").addEventListener("click", async () => {
  try {
    const summary = store.summary();
    await saveRunToCloud(summary);
    alert("Saved summary to cloud.");
  } catch (err) {
    console.error(err);
    alert("Cloud save failed.");
  }
});