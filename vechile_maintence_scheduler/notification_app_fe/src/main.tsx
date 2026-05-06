// main.tsx snippet
import { initLogger } from '../../logging_middleware/src';

const logger = initLogger({
  getAccessToken: () => localStorage.getItem('access_token'), 
  baseUrl: 'https://api.evalserver.com', // Replace with actual URL
  onError: (err) => console.error("Logging failed:", err)
});

// Log app start
logger.log("info", "middleware", "Frontend application initialized");