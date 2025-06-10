import "./ToogleThemeButton.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { useContext } from "react";
export default function ToogleThemeButton() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="toogle-theme-btn">
      <span>Go {darkMode ? "light" : "dark"}</span>
      <img src={darkMode ? sun : moon} alt="toogle-icon" />
    </button>
  );
}
