import React, { useState, useEffect } from 'react';

import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import Certificates from './Components/Certificates.jsx';
import Projects from './Components/Projects.jsx';
import Experience from './Components/Experience.jsx';
import Contact from './Components/Contact.jsx';
import CallToAction from './Components/CallToAction.jsx';
import Footer from './Components/Footer.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';

export default function App() {
  // Default to dark (navy) theme — matches the new palette
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      // default dark
      setIsDark(true);
      document.documentElement.classList.add('dark');
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
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0f1e] bg-grid-pattern font-sans transition-colors duration-300">
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