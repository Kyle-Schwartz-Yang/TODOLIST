// React  IMPORTS
// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//Components
import App from "./components/app/App";
//STYLE
import "./index.scss";

createRoot(document.getElementById("root")!).render(<App />);
