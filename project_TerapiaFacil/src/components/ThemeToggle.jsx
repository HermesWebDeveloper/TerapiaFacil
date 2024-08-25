import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="mt-4 p-4 flex justify-center">
      <button
        onClick={toggleTheme}
        className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-110"
        aria-label="Toggle Theme"
      >
        {theme === 'light' ? '☀️' : '🌙'}
      </button>
    </div>
  );
}

export default ThemeToggle;
