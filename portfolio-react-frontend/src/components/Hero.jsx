import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Hero() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="hero" className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'} min-h-screen flex items-center justify-center px-4 pt-24`}>
      <div className="text-center">
        <h1 className="text-5xl font-extrabold">Hi, I'm Shaique Aijaz</h1>
        <p className="mt-4 text-lg">A Full-Stack Developer crafting digital experiences</p>
        <a href="#projects" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;