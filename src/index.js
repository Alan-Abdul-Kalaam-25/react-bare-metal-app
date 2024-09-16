import { createRoot } from "react-dom/client";
import React from "react";
import Webapp from "./components/Webapp.jsx";

function App() {
  return (
    <React.StrictMode>
      <Webapp />
    </React.StrictMode>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
