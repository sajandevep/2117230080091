import { Log } from "../../../../src/client";

// Mock API delay to demonstrate loading states
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const notificationApi = {
  async saveNotification(data: any) {
    Log("frontend", "info", "api", "Attempting to save notification");
    await delay(800); 
    
    // Simulate random error for demonstration
    if (data.title.toLowerCase() === "error") {
      Log("frontend", "error", "api", "Failed to create notification: system error");
      throw new Error("Server rejected the request");
    }

    Log("frontend", "info", "api", "Notification saved successfully to backend");
    return { ...data, id: Math.random().toString(36).substr(2, 9) };
  }
};