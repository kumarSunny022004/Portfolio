import { Moon, Sun } from "lucide-react";
import { useState,useEffect } from "react";

export const ThemeToggle = () => {
  const [isDarkmode, setIsDarkmode] = useState(false);

  useEffect(() => {
    const storedTheme= localStorage.getItem("theme");
    if(storedTheme=="dark"){
        setIsDarkmode(true);
        document.documentElement.classList.add("dark");
        
    }else{
         localStorage.setItem("theme", "light");
        setIsDarkmode(false); 
        
    }
  })

  const toggleTheme = () => {
    if (isDarkmode) {
        document.documentElement.classList.remove("dark");
         localStorage.setItem("theme", "light");
        setIsDarkmode(false);
    }else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDarkmode(true);
    }
  }

  return (
    <button onClick={toggleTheme}>
      {isDarkmode ? (
        <Sun className="h-6 w-6 text-yellow-300 " />
      ) : (
        <Moon className="h-6 w-6 text-blue-900 " />
      )}
    </button>
  );
};
