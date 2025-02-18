import React, { useEffect, useState } from 'react'

const DarkMode = () => {

const [isDarkMode, setIsDarkMode] = useState(false);
// 
useEffect(()=>{
    const saveMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(saveMode);
    // 
    if(saveMode){
    document.documentElement.classList.add('dark');
    }else{
        document.documentElement.classList.remove('dark');
    }
    // 
},[])

// 
const toggleDarkMode =()=>{
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    // 
    if(newMode){
        document.documentElement.classList.add('dark')
    }else{
        document.documentElement.classList.remove('dark')
    }

}


  return (
    <button
    onClick={toggleDarkMode}
    className="bg-blue-500 text-white px-4 py-2 rounded"
  >
    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
  </button>
  )
}

export default DarkMode