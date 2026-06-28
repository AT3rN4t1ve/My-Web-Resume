import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from './Data/translations';

// Import Component ทั้งหมด
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
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState('en');

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

    const savedLang = localStorage.getItem('lang');
    if (savedLang) setLang(savedLang);
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

  const toggleLang = () => {
    const next = lang === 'en' ? 'th' : 'en';
    setLang(next);
    localStorage.setItem('lang', next);
  };

  const t = TRANSLATIONS[lang];

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-slate-900 bg-grid-pattern font-sans transition-colors duration-300`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} lang={lang} toggleLang={toggleLang} t={t.nav} />
      
      <ScrollToTop />
      
      <main>
        <Hero t={t.hero} lang={lang} />
        <About t={t.about} lang={lang} />
        <Skills t={t.skills} />
        <Certificates t={t.certificates} />
        <Projects t={t.projects} />
        <Experience t={t.experience} />
        <Contact t={t.contact} />
        <CallToAction t={t.cta} />
      </main>
      
      <Footer t={t} />
    </div>
  );
}