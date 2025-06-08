import { useState, useEffect, useContext } from 'react';

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <>
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </>
    </ThemeProvider>
  );
}

export default App;
