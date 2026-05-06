import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Import the Log function from your middleware
import { Log } from '../../../src/client' 

// Log that the app has successfully initialized and mounted
Log("frontend", "info", "page", "Notification page loaded");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)