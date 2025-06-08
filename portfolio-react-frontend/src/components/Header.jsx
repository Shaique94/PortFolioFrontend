import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
  const { isDarkMode,toggleTheme} = useContext(ThemeContext);

    return (
      <header className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} py-4 shadow-md`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <nav className="space-x-4">
          <a href="#hero" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>Home</a>
          <a href="#about" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>About</a>
          <a href="#projects" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>Projects</a>
          <a href="#contact" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>Contact</a>
        </nav>
        <button
          onClick={toggleTheme}
          className="ml-4 px-4 py-2 rounded border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
    );
  }
  
  export default Header;