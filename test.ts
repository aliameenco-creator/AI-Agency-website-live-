import fetch from "node-fetch";

async function run() {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [{ role: "user", text: "hello" }]
      })
    });
    const data = await res.json();
    console.log("Response:", JSON.stringify(data));
  } catch (err: any) {
    console.error("Fetch err:", err);
  }
}

run();
