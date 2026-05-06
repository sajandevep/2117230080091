// Partial implementation - To be completed by you
export class LogClient {
  constructor(private options: LoggerOptions) {}

  async send(payload: LogPayload) {
    try {
      const token = this.options.getAccessToken();
      if (!token) throw new Error("No access token available");

      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), this.options.timeoutMs || 5000);

      const response = await fetch(`${this.options.baseUrl}/evaluation-service/logs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(id);

      if (!response.ok) {
        // TODO: Handle non-2xx responses (e.g., 401, 429)
      }
    } catch (err) {
      this.options.onError?.(err);
    }
  }
}