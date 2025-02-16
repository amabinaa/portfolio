import { useState } from "react";

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle("dark-theme", !isDarkTheme);
    document.body.classList.toggle("light-theme", isDarkTheme);
  };

  return (
    <div className="theme-switcher">
      <span>LIGHT</span>
      <div className="switch-container" onClick={toggleTheme}>
        <div
          className={`switch-handle ${isDarkTheme ? "dark" : "light"}`}
        ></div>
      </div>
      <span>DARK</span>
    </div>
  );
};

export default ThemeToggle;
