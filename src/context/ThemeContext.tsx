'use client';
 
import { createContext, useContext, useEffect, useState } from 'react';
 
type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};
 
const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
});
 
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
 
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
 
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      const root = document.documentElement;
      if (next) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };
 
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
 
export const useTheme = () => useContext(ThemeContext);