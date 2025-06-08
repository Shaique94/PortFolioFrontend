import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Contact = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
    
      <section id="contact" className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} py-20`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600">Email me at <a href="mailto:you@example.com" className="text-blue-600">you@example.com</a></p>
        </div>
      </section>
    );
  };
  
  export default Contact;