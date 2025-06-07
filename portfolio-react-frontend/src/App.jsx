import { useState, useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {



  return (
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

  );
}

export default App
