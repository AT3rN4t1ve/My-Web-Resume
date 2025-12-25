import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderCode } from 'lucide-react'; // เหลือแค่ FolderCode ไว้เป็น Default
import { PORTFOLIO_DATA } from '../Data/portfolio';
import SectionTitle from './SectionTitle';

const Projects = () => {
  // สี Pastel สำหรับส่วนหัว (Header)
  const headerColors = [
    'bg-rose-50',   
    'bg-slate-100', 
    'bg-orange-50'  
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Featured Projects" subtitle="Past Projects (Click to view code)" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project, index) => {
            // เลือกสีพื้นหลังส่วนหัวตามลำดับ
            const headerBg = headerColors[index % headerColors.length];

            return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1 }}
              // ตัวการ์ดใช้สีพื้นฐาน (ขาว/ดำ)
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-slate-700"
            >
              {/* ส่วนหัว (Header) สี Pastel */}
              <div className={`h-48 ${headerBg} dark:bg-opacity-5 flex items-center justify-center relative group overflow-hidden`}>
                
                {/* ✅ แก้ไข: แสดงรูปภาพจาก portfolio.js */}
                <div className="transform group-hover:scale-110 transition-transform duration-500 z-0 flex items-center justify-center">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      // กำหนดขนาดรูปให้พอดี ไม่ใหญ่เกินไป (w-28 = 112px)
                      className="w-28 h-28 object-contain drop-shadow-sm"
                      onError={(e) => {
                        // ถ้าโหลดรูปไม่ขึ้น ให้ซ่อนรูปไปเลย แล้วให้ไอคอน FolderCode ทำงานแทน
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = ''; // ล้าง parent เพื่อให้ fallback ทำงานถ้ามีการจัดการ state (แต่ในที่นี้ซ่อน img ก็พอ)
                      }}
                    />
                  ) : (
                    // ถ้าไม่มีรูป ให้โชว์ไอคอน Folder แทน
                    <FolderCode size={80} strokeWidth={1.5} className="opacity-20 text-gray-500 dark:text-gray-400" />
                  )}
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4 z-10">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all shadow-md text-gray-700 dark:text-gray-200" title="View Code">
                      <Github size={22} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all shadow-md text-gray-700 dark:text-gray-200" title="Live Demo">
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>

              {/* ส่วนเนื้อหา (Body) */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-sm mb-6 flex-1 line-clamp-3 leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-slate-900/50 px-3 py-1.5 rounded-md border border-indigo-100 dark:border-slate-700">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default Projects;