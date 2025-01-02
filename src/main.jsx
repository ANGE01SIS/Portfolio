import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import "./animations.css";
import "atropos/css";
import Circle from "./components/Circle";
import Stars from "./components/Stars";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Circle />
    <App />
    <Stars />
  </StrictMode>
);
