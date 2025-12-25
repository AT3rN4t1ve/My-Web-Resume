import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import SectionTitle from './SectionTitle';

// --- แก้ไขจุดที่ 1: Import รูปภาพ (เช็คชื่อไฟล์ให้ตรงกับใน folder assets) ---
// แนะนำให้เปลี่ยนชื่อไฟล์ใน assets เป็น cert1.png เพื่อความชัวร์
import webResponseImg from '../assets/Web Response.png'; 

const certificatesData = [
  {
    id: 1,
    name: "Web Responsive Design",
    issuer: "FreeCodeCamp",
    date: "2023",
    link: "https://www.freecodecamp.org/certification/atthakit/responsive-web-design",
    // --- แก้ไขจุดที่ 2: เอาเครื่องหมาย "" ออก เพื่อให้เป็นตัวแปร ---
    image: webResponseImg, 
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Certifications" subtitle="Achievements and Continuous Learning" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-slate-800">
                {/* Check if there is an image, if so display it */}
                {cert.image ? (
                  <img src={cert.image} alt={cert.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <Award size={48} />
                  </div>
                )}
                
                {cert.link && (
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-full font-medium transform scale-90 group-hover:scale-100 transition-all shadow-lg hover:bg-indigo-50"
                    >
                      <span>View Certificate</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-indigo-600 dark:text-indigo-400">
                    <Award size={18} />
                  </div>
                  <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    {cert.issuer}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-indigo-600 transition-colors">
                  {cert.name}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-slate-800 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span>Issued: {cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;