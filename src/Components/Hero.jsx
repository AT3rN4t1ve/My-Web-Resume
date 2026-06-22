import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import profileImage from '../profile.jpg';
import { PORTFOLIO_DATA } from '../Data/portfolio';
import useTypewriter from '../hooks/useTypewriter';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = PORTFOLIO_DATA?.personal?.roles || ['Developer'];
  const currentRole = roles[roleIndex];
  const typedRole = useTypewriter(currentRole, 80, 800);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });

  // Parallax transforms
  const yText  = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const yBlob  = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gray-50 dark:bg-[#0a0f1e] transition-colors duration-300 overflow-hidden relative"
    >
      {/* Blobs — parallax layer */}
      <motion.div style={{ y: yBlob }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob dark:opacity-[0.07]" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 dark:opacity-[0.07]" />
        <div className="absolute -bottom-8 left-1/4 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000 dark:opacity-[0.05]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Text content — parallax */}
          <motion.div
            style={{ y: yText, opacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Open to opportunities
            </motion.div>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-500 dark:text-slate-400 mb-3">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold font-display text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
              {PORTFOLIO_DATA.personal.name}
            </h1>

            <div className="h-16 md:h-20 mb-4">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-600 dark:text-slate-300">
                I am a{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
                  {typedRole}
                </span>
                <span className="animate-blink text-cyan-400">|</span>
              </h2>
            </div>

            <p className="text-base md:text-lg text-gray-500 dark:text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {PORTFOLIO_DATA.personal.summary ||
                'Full Stack Developer passionate about building performant, user-centric applications.'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-[#0a0f1e] font-semibold rounded-full transition-all shadow-[0_0_24px_rgba(6,182,212,0.35)] hover:shadow-[0_0_36px_rgba(6,182,212,0.5)] cursor-pointer"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex items-center justify-center md:justify-start gap-6 text-gray-400 dark:text-slate-500">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex-1 relative max-w-md"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 blur-2xl scale-105" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/20 dark:border-cyan-500/10 bg-gray-200 dark:bg-slate-800">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Corner accent */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-cyan-400/50 rounded-br-xl" />
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-violet-400/50 rounded-tl-xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400/40 rounded-full flex justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;