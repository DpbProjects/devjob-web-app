import { useEffect, useState } from "react";

function useThemeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const themeValue = localStorage.getItem("theme");
    setIsDarkMode(themeValue === "dark");
  }, []); // Run once on mount

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]); // Run when isDarkMode changes

  const handleToggle = () => {
    const newMode = !isDarkMode;
    localStorage.setItem("theme", newMode ? "dark" : "light");
    setIsDarkMode(newMode);
  };

  return { isDarkMode, handleToggle };
}

export default useThemeToggler;
