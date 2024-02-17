import useThemeToggler from "../../hooks/useThemeToggler.ts";

import SunIcon from "../icons/SunIcon.tsx";
import MoonIcon from "../icons/MoonIcon.tsx";

function ThemeToggler() {
  const { isDarkMode, handleToggle } = useThemeToggler();

  return (
    <label className="inline-flex items-center justify-between cursor-pointer min-w-28">
      <SunIcon />
      <input
        type="checkbox"
        className="sr-only peer min-h-12"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <div className="relative w-12 h-6 bg-off-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[8px] after:bg-violet after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <MoonIcon />
    </label>
  );
}

export default ThemeToggler;
