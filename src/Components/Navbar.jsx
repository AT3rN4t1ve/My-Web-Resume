import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home',         href: '#home' },
    { name: 'About',        href: '#about' },
    { name: 'Skills',       href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Projects',     href: '#projects' },
    { name: 'Experience',   href: '#experience' },
    { name: 'Contact',      href: '#contact' },
  ];

  return (
    <>
      {/* Scroll progress bar — cyan */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-400 origin-left z-50"
        style={{ scaleX }}
      />

      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'py-2 bg-white/80 dark:bg-[#0a0f1e]/90 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-cyan-900/30'
          : 'py-4 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">

            {/* Logo */}
            <div
              className="flex-shrink-0 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="text-2xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400 dark:from-cyan-400 dark:to-violet-400">
                My Portfolio
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                  </a>
                ))}
              </div>
            </div>

            {/* Toggle + Mobile button */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors ring-1 ring-gray-200 dark:ring-slate-700 focus:outline-none"
                aria-label="Toggle Dark Mode"
              >
                {isDark
                  ? <Sun  size={18} className="text-amber-400" />
                  : <Moon size={18} className="text-cyan-600" />}
              </button>

              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 dark:bg-[#0a0f1e]/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-slate-800"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;