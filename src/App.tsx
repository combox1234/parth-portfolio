import React, { useEffect } from 'react';
import StarryBackground from './components/StarryBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './utils/animations.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Parth Patil | Portfolio";
    
    // Force dark mode
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  }, []);

  return (
    <div className="font-sans bg-black text-white transition-colors duration-300 min-h-screen">
      <StarryBackground />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;