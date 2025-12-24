import React, { useState, useEffect } from 'react';

// Import Component ทั้งหมด
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import Certificates from './Components/Certificates.jsx'; // Import แล้ว
import Projects from './Components/Projects.jsx';
import Experience from './Components/Experience.jsx';
import Contact from './Components/Contact.jsx';
import CallToAction from './Components/CallToAction.jsx'; // Import แล้ว
import Footer from './Components/Footer.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-slate-900 bg-grid-pattern font-sans transition-colors duration-300`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <ScrollToTop />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Experience />
        <Contact />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
}