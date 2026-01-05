import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, Github, Linkedin } from 'lucide-react';
import profileImage from '../profile.jpg'; 
import { PORTFOLIO_DATA } from '../Data/portfolio'; 
import useTypewriter from '../hooks/useTypewriter'; 

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = PORTFOLIO_DATA?.personal?.roles || ["Developer"];
  const currentRole = roles[roleIndex];
  
  const typedRole = useTypewriter(currentRole, 80, 800);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300 overflow-hidden relative">
      
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-purple-900/50"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-indigo-900/50"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-900/50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            <div className="h-20 md:h-24">
               <h2 className="text-2xl md:text-4xl font-bold text-gray-600 dark:text-gray-300">
                I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">{typedRole}</span>
                <span className="animate-blink">|</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {PORTFOLIO_DATA.personal.summary || "Web Developer with a passion for building beautiful and functional applications."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                className="flex items-center justify-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors shadow-lg hover:shadow-indigo-500/30 cursor-pointer"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>

              {/* --- ส่วนปุ่ม Download CV --- */}
              
              {/* แบบที่ 1: ใช้จริง (เมื่อไฟล์พร้อม ให้เปิด Comment นี้ และปิดแบบที่ 2) */}
              {/* <a 
                href="/Resume_YourName.pdf" 
                download="Resume_YourName.pdf"
                className="flex items-center justify-center px-8 py-3 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 text-gray-900 dark:text-white rounded-full font-medium transition-colors shadow-sm"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
              */}

              {/* แบบที่ 2: Placeholder (ใช้ตอนนี้ไปก่อน เพื่อบอกว่ากำลังทำ) */}
              <button 
                // แก้ไขข้อความ Alert
                onClick={() => alert("The complete Resume is currently being updated. (Coming Soon!)")}
                className="flex items-center justify-center px-8 py-3 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 text-gray-900 dark:text-white rounded-full font-medium transition-colors shadow-sm"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </button>

            </div>

            <div className="mt-10 flex items-center justify-center md:justify-start gap-6 text-gray-500 dark:text-gray-400">
              <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:scale-110">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative max-w-md"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob dark:bg-indigo-900/50"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-900/50"></div>
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700 bg-gray-200 dark:bg-slate-800">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1"
        >
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;