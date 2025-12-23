import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  ExternalLink, 
  Code2, 
  Database, 
  Layout, 
  Terminal,
  MapPin,
  Calendar,
  Send
} from 'lucide-react';

/**
 * =================================================================================
 * ส่วนที่ 1: ข้อมูล (DATA & CONFIG)
 * แก้ไขข้อมูลส่วนตัวของคุณตรงนี้ได้เลย ข้อมูลจะถูกดึงไปแสดงผลทั่วทั้งเว็บ
 * =================================================================================
 */
const PORTFOLIO_DATA = {
  personal: {
    name: "อรรถกฤต ขำประไพ", // ชื่อของคุณ
    nickname: "เพชร",
    roles: ["Computer Science Student","Frontend Developer","Backend Developer","Full Stack Developer"],
    email: "kh.callphet@gmail.com",
    github: "https://github.com/AT3rN4t1ve",
    linkedin: "",
    location: "นครสวรรค์, ไทย",
    about: "นักศึกษาชั้นปีที่ 4 สาขาวิทยาการคอมพิวเตอร์ มีความสนุกกับการเรียนรู้เทคโนโลยีใหม่ๆ Full-stack Development",
  },
  education: [
    {
      year: "2021 - ปัจจุบัน",
      degree: "วิทยาศาสตรบัณฑิต (วิทยาการคอมพิวเตอร์)",
      school: "มหาวิทยาลัยพะเยา",
      details: "GPAX: 2.72 | "
    },
    {
      year: "2018 - 2021",
      degree: "มัธยมศึกษาตอนปลาย (วิทย์-คณิต)",
      school: "โรงเรียนโพฒิสารศึกษา"
    }
  ],
  experience: [
    {
      id: 1,
      role: "Full Stack Developer Intern",
      company: "Betime Solution",
      period: "3 พฤศจิกายน 2568 - 22 กุมภาพันธ์ 2569",
      description: "",
      tags: ["Angular", "Java SpringBoot", "Elasticsearch & Kibana"]
    },
    {
      id: 2,
      role: "Hackathon Participant",
      company: "Bangkok Code War 2023",
      period: "ธ.ค. 2023",
      description: "",
      tags: ["Algorithm", "Teamwork"]
    }
  ],
  skills: {
    frontend: [
      { name: "React.js / Next.js", level: 85 },
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "Tailwind CSS", level: 70 },
      { name: "HTML5 / CSS3", level: 70 },
      { name: "Framer Motion", level: 50 },
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 80 },
      { name: "MySQL / PostgreSQL", level: 70 },
      { name: "Firebase", level: 65 },
    ],
    tools: [
      "Git / GitHub",
      "VS Code",
      "Figma",
      "Postman",
      "Vercel / Netlify"
    ]
  },
  projects: [
    {
      id: 1,
      title: "Crypto Tracker Dashboard",
      description: "เว็บแอปพลิเคชันสำหรับดูราคาเหรียญคริปโตแบบ Real-time ดึงข้อมูลผ่าน API พร้อมกราฟแสดงผล",
      tags: ["React", "Chart.js", "CoinGecko API", "Tailwind"],
      github: "#",
      demo: "#",
      image: "crypto" // Mock logic for image
    },
    {
      id: 2,
      title: "E-Commerce Mockup",
      description: "ระบบร้านค้าจำลอง มีตะกร้าสินค้า ระบบ Filter และหน้า Checkout ที่รองรับ Responsive เต็มรูปแบบ",
      tags: ["Next.js", "Zustand", "Stripe Integration"],
      github: "#",
      demo: "#",
      image: "shop"
    },
    {
      id: 3,
      title: "University Activity Log",
      description: "ระบบบันทึกชั่วโมงกิจกรรมนักศึกษา (Senior Project Prototype) รองรับการ Login และ Export PDF",
      tags: ["Vue.js", "Firebase Auth", "Firestore"],
      github: "#",
      demo: "#",
      image: "activity"
    }
  ]
};

/**
 * =================================================================================
 * ส่วนที่ 2: Utility Components & Hooks
 * =================================================================================
 */

// Hook สำหรับการทำ Typewriter Effect ง่ายๆ
const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    let i = 0;
    setDisplayText(''); // Reset เมื่อ text เปลี่ยน
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return displayText;
};

// Component หัวข้อ Section
const SectionTitle = ({ title, subtitle }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12 text-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-4">
      {title}
    </h2>
    <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full mb-4"></div>
    {subtitle && <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
  </motion.div>
);

/**
 * =================================================================================
 * ส่วนที่ 3: Main Components (Sections)
 * =================================================================================
 */

const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  // Logic เพื่อเปลี่ยน active section ตามการ scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 origin-left" 
        style={{ scaleX }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {`<${PORTFOLIO_DATA.personal.nickname} />`}
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  activeSection === link.href.substring(1) 
                  ? 'text-indigo-600 dark:text-indigo-400' 
                  : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-200"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-slate-800"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const currentRole = PORTFOLIO_DATA.personal.roles[roleIndex];
  const typedRole = useTypewriter(currentRole, 100);

  // เปลี่ยน Role ทุกๆ 4 วินาที
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PORTFOLIO_DATA.personal.roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 text-lg">สวัสดีครับ, ผมชื่อ</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            <div className="h-12 text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-mono mb-8">
              I am a <span className="text-indigo-600 dark:text-indigo-400 border-r-2 border-indigo-600 pr-1 animate-pulse">{typedRole}</span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {PORTFOLIO_DATA.personal.about}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/30">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
              <button onClick={() => alert("ระบบ Download Resume จำลอง: คุณสามารถใส่ไฟล์ PDF จริงได้ที่นี่")} className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-slate-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all">
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

          {/* Abstract Shape / Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative Blobs */}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-purple-900/50"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-indigo-900/50"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-900/50"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700 bg-gray-200 dark:bg-slate-800 flex items-center justify-center">
                 <div className="text-center p-6">
                    <Code2 size={64} className="mx-auto text-indigo-500 mb-4" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">[ใส่รูปโปรไฟล์ของคุณที่นี่]</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="ประวัติการศึกษาและเป้าหมายของผม" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Biography */}
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-gray-50 dark:bg-slate-800 p-8 rounded-xl shadow-sm"
          >
             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Terminal className="mr-3 text-indigo-500" /> 
                My Goal
             </h3>
             <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                "เป้าหมายของผมคือการเป็น Full Stack Developer ที่มีความเชี่ยวชาญทั้งด้าน Technical และ User Experience ผมเชื่อว่าซอฟต์แวร์ที่ดีไม่ได้มีแค่โค้ดที่สะอาด แต่ต้องแก้ปัญหาของผู้ใช้ได้จริง และมีความสวยงามน่าใช้งาน"
             </p>
             <div className="space-y-3">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="mr-3 h-5 w-5 text-indigo-500" />
                    {PORTFOLIO_DATA.personal.location}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Mail className="mr-3 h-5 w-5 text-indigo-500" />
                    {PORTFOLIO_DATA.personal.email}
                </div>
             </div>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {PORTFOLIO_DATA.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-indigo-200 dark:border-slate-700"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-indigo-600 border-2 border-white dark:border-slate-900"></div>
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-slate-800 px-3 py-1 rounded-full">
                  {edu.year}
                </span>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-2">{edu.degree}</h4>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{edu.school}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Technical Skills" subtitle="เครื่องมือและเทคโนโลยีที่ผมใช้งานได้" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border-t-4 border-blue-500"
          >
            <div className="flex items-center mb-6">
              <Layout className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Frontend</h3>
            </div>
            <div className="space-y-4">
              {PORTFOLIO_DATA.skills.frontend.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-blue-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border-t-4 border-green-500"
          >
            <div className="flex items-center mb-6">
              <Database className="w-8 h-8 text-green-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Backend</h3>
            </div>
            <div className="space-y-4">
              {PORTFOLIO_DATA.skills.backend.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-green-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border-t-4 border-purple-500 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center mb-6">
              <Terminal className="w-8 h-8 text-purple-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tools & Others</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO_DATA.skills.tools.map((tool, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-slate-700">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Featured Projects" subtitle="ผลงานที่ผ่านมา (Click เพื่อดูโค้ด)" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Mock Image Area */}
              <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center relative group">
                <span className="text-gray-500 dark:text-gray-400 text-4xl font-bold opacity-30 select-none">
                  {project.title.charAt(0)}
                </span>
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
                  <a href={project.github} className="p-2 bg-white rounded-full hover:bg-indigo-500 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="p-2 bg-white rounded-full hover:bg-indigo-500 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-slate-900 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Experience" subtitle="ประสบการณ์ทำงานและกิจกรรม" />
        
        <div className="space-y-12">
          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line (Desktop only usually, but simplified here) */}
              <div className="md:flex items-start justify-between group">
                <div className="md:w-1/3 md:pr-8 md:text-right mb-2 md:mb-0">
                  <div className="flex items-center md:justify-end text-indigo-600 dark:text-indigo-400 font-bold">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-1">{exp.role}</h4>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{exp.company}</p>
                </div>

                {/* Dot */}
                <div className="hidden md:block w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-800 shadow absolute left-[33%] transform -translate-x-1/2 mt-1.5 z-10"></div>
                <div className="hidden md:block absolute left-[33%] top-2 bottom-[-48px] w-0.5 bg-gray-200 dark:bg-slate-700 transform -translate-x-1/2 last:hidden"></div>

                <div className="md:w-2/3 md:pl-8 border-l-2 border-gray-200 dark:border-slate-700 md:border-l-0 pl-4 md:pl-0 ml-[-2px] md:ml-0 pb-8 md:pb-0">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                     <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                     <div className="flex flex-wrap gap-2">
                        {exp.tags.map(tag => (
                          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const formRef = useRef();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("ขอบคุณที่ติดต่อ! นี่เป็นเพียงแบบฟอร์มจำลอง (UI Only)");
    formRef.current.reset();
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get In Touch" subtitle="สนใจร่วมงานหรือมีคำถาม สอบถามได้เลยครับ" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl">
          
          {/* Contact Info Side */}
          <div className="p-8 bg-indigo-600 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-indigo-100 mb-8">
                ผมกำลังมองหาโอกาสในการฝึกงาน หรือ Junior Position หากบริษัทของคุณกำลังมองหาคนที่พร้อมเรียนรู้ ติดต่อผมได้เลยครับ
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="text-indigo-200" />
                  <span>{PORTFOLIO_DATA.personal.email}</span>
                  <button 
                    onClick={handleCopyEmail}
                    className="text-xs bg-indigo-500 hover:bg-indigo-400 px-2 py-1 rounded transition-colors"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-indigo-200" />
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              <a href={PORTFOLIO_DATA.personal.github} className="p-2 bg-indigo-500 rounded-full hover:bg-indigo-400 transition-colors">
                <Github size={20} />
              </a>
              <a href={PORTFOLIO_DATA.personal.linkedin} className="p-2 bg-indigo-500 rounded-full hover:bg-indigo-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input required type="text" id="name" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input required type="email" id="email" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea required id="message" rows="4" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="Hello, I'd like to talk about..."></textarea>
              </div>
              <button type="submit" className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all hover:shadow-lg">
                Send Message <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 py-8 text-center transition-colors duration-300">
    <p className="text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. Built with React & Tailwind CSS.
    </p>
  </footer>
);

/**
 * =================================================================================
 * ส่วนที่ 4: Main App
 * =================================================================================
 */

export default function App() {
  const [isDark, setIsDark] = useState(false);

  // Theme Handling with LocalStorage
  useEffect(() => {
    // Check local storage or system preference
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
    <div className={`min-h-screen bg-gray-50 dark:bg-slate-900 font-sans transition-colors duration-300`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}