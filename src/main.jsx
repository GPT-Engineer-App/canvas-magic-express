import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Hardcoded environment variables
window.process = {
  env: {
    NODE_ENV: import.meta.env.MODE,
    // Add your hardcoded environment variables here
    API_URL: "https://api.example.com",
    API_KEY: "your-api-key-here",
    // Add more variables as needed
  }
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
