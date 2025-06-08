import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function About() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} py-20`}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <p className="mt-4 text-center">I am a passionate developer with experience in building web applications.</p>
      </div>
    </section>
  );
}

export default About;