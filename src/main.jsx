import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/reset.css";
import "./css/helper.css";
import "./css/text.css";
import "./css/index.css";
import "./css/grid.css";
import "./css/card.css";
import "./css/map.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { GameProvider } from "./context/GameContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <GameProvider>
        <App />
      </GameProvider>
    </Router>
  </StrictMode>
);
