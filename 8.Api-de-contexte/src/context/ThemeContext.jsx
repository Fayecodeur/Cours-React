// ThemeContext.js
import { createContext, useState } from "react";

// 1. On crée le contexte (on l'appelle ThemeContext, pas ThemeProvider)
export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode((prev) => !prev);
  }

  // 2. Changer la classe du body
  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  // 3. Fournir le contexte à toute l'application
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
