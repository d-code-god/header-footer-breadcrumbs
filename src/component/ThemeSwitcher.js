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
      <button onClick={toggleTheme} className="p-2 border-2 border-[#1c1c9e] dark:border-gray-900">
        {isDarkMode ? <IoMdSunny /> : <BsFillMoonStarsFill />}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
