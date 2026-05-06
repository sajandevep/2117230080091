import { LogLevel, LogPackage, LogPayload } from "./types";

const LOG_ENDPOINT = "http://20.207.122.201/evaluation-service/logs";
const BEARER_TOKEN = "YOUR_TOKEN_HERE"; // Replace with your actual token

export const Log = async (
  stack: "frontend",
  level: LogLevel,
  pkg: LogPackage,
  message: string
) => {
  const payload: LogPayload = { stack, level, package: pkg, message };

  // Console fallback for local development
  console.log(`[${level.toUpperCase()}] [${pkg}] ${message}`);

  try {
    const response = await fetch(LOG_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${BEARER_TOKEN}`
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.warn("Logging middleware failed to reach server:", response.statusText);
    }
  } catch (error) {
    console.error("Logging middleware Error:", error);
  }
};