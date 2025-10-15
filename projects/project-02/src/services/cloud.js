const BIN_ID = "68eeb2a243b1c97be9681ba3"; 
const PUT_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

export async function saveRunToCloud(summary) {
  const payload = {
    type: "tasktrack_summary",
    updated_ts: new Date().toISOString(),
    data: summary
  };

  const res = await fetch(PUT_URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Cloud save error:", res.status, errorText);
    throw new Error(`Cloud save failed: ${res.status}`);
  }

  console.log("Cloud save success!");
  return true;
}