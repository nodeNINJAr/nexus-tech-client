import React, { useEffect, useState } from "react";
import { MdNightsStay } from "react-icons/md";
import { CiLight } from "react-icons/ci";



// 
const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  //
  useEffect(() => {
    const saveMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(saveMode);
    //
    if (saveMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    //
  }, []);

  //
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    //
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="dark:text-white text-gray-600 p-3 text-2xl"
    >
      {isDarkMode ? <CiLight /> : <MdNightsStay />}
    </button>
  );
};

export default DarkMode;
