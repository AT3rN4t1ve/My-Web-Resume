import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, Github, Linkedin } from 'lucide-react';
import profileImage from '../profile.jpg'; // เช็คว่ามีรูป profile.jpg ในโฟลเดอร์ src นะ
// แก้ Data เป็น data หรือ Data ตามชื่อโฟลเดอร์จริงของคุณ
import { PORTFOLIO_DATA } from '../Data/portfolio'; 
// แก้ path Hook ให้ถูกต้อง (ถอยหลังออกไปหา hooks)
import useTypewriter from '../hooks/useTypewriter'; 

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  // เช็คเผื่อกรณีข้อมูลยังโหลดไม่เสร็จ
  const roles = PORTFOLIO_DATA?.personal?.roles || ["Developer"];
  const currentRole = roles[roleIndex];
  
  const typedRole = useTypewriter(currentRole, 80, 800);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [roles.length]); // เพิ่ม dependency เพื่อความชัวร์

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 text-lg">สวัสดีครับ, ผมชื่อ</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            
            <div className="h-12 text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-mono mb-8 flex items-center justify-center md:justify-start">
              <span className="mr-2">I am a</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold min-w-[10px]">
                {typedRole}
              </span>
              <span className="w-[3px] h-8 bg-indigo-600 ml-1 animate-pulse"></span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {PORTFOLIO_DATA.personal.about}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/30">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
              <button onClick={() => alert("ระบบ Download Resume จำลอง")} className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-slate-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </button>
            </div>
            
            <div className="mt-8 flex justify-center md:justify-start space-x-6 text-gray-500 dark:text-gray-400">
              <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Github size={24} />
              </a>
              <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-purple-900/50"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-indigo-900/50"></div>
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
          className="w-6 h-10 border-2 border-indigo-600 dark:border-indigo-400 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;