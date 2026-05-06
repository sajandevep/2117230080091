import { initLogger } from '../../logging_middleware/src';

initLogger({
  getAccessToken: () => localStorage.getItem("access_token"),
  baseUrl: "YOUR_EVAL_SERVER_URL", // TODO: Replace with actual URL
  onError: (err) => console.error("Logging Middleware Error:", err)
});

// Now you can use log() globally