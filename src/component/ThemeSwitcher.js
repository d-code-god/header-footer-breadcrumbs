import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import { useTheme } from "next-themes";

function ThemeSwitcher() {
  const { setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  isDarkMode ? setTheme("dark") : setTheme("light");

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add logic to toggle theme classes or styles here
  };

  return (
    <div>
      <button onClick={toggleTheme} className="text-xl">
        {isDarkMode ? <IoMdSunny /> : <BsFillMoonStarsFill />}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
