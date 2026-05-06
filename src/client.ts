// LOGGING_MIDDLEWARE/src/client.ts
const LOG_URL = "http://20.207.122.201/evaluation-service/logs";
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export const Log = async (stack: string, level: string, pkg: string, message: string) => {
  try {
    await fetch(LOG_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${ACCESS_TOKEN}`
      },
      body: JSON.stringify({ stack, level, package: pkg, message })
    });
  } catch (err) {
    console.error("Logging Error:", err);
  }
};