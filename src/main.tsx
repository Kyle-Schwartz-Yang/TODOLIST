// React  IMPORTS
// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//Components
import App from "./components/app/App";
//STYLE
import "./index.scss";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("❌ Root element not found!");
}

createRoot(rootElement).render(<App />);
