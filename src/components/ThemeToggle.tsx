import { useEffect, useState } from "preact/hooks";
import MoonIcon from "./icons/Moon.astro?raw";
import SunIcon from "./icons/Sun.astro?raw";
import { Themes } from "../components/constants/theme.constants";


export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? Themes.LIGHT);
  const isLight = theme === Themes.LIGHT

  useEffect(() => {
    if (theme === Themes.DARK) {
      document.documentElement.classList.add(Themes.DARK);
    } else {
      document.documentElement.classList.remove(Themes.DARK);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleClick = () => {
    setTheme(isLight ? Themes.DARK : Themes.LIGHT);
  };
 
    const Icon = isLight ? SunIcon : MoonIcon
    const classesColor = isLight ? "text-gray-700" : "text-gray-300"

  return (
    <button class={`hover:transparent size-8 dark:hover:transparent rounded transition hover:scale-110 p-1 border-2 border-transparent dark:border-transparent ${classesColor}`}
      aria-label="Theme toggle"
      onClick={handleClick}>
      <span dangerouslySetInnerHTML={{ __html: Icon }} />
    </button>
  )
}