import { useState } from "react";
import "./Container.css";

export default function Container() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`full-container ${darkMode && "dark-mode"}`}>
      <h1>Toggle une classe</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {" "}
        Activer le {darkMode ? "light mode" : "dark mode"}{" "}
      </button>
    </div>
  );
}
