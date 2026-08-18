import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export const DarkModeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('ts_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    if (nextIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ts_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ts_theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-700/80 backdrop-blur-md transition-all duration-300 active:scale-95 shadow-sm min-w-[44px] min-h-[44px] flex items-center justify-center ${className}`}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};
