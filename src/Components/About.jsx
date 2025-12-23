import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, MapPin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../Data/portfolio';
import SectionTitle from './SectionTitle'; // เรียกใช้ Component ที่เราเพิ่งสร้าง

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="เส้นทางการศึกษาและเป้าหมาย" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-gray-50 dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700"
          >
             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Terminal className="mr-3 text-indigo-500" /> 
                My Passion
             </h3>
             <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                "{PORTFOLIO_DATA.personal.about} ผมเชื่อว่าซอฟต์แวร์ที่ดีไม่ได้มีแค่โค้ดที่สะอาด แต่ต้องแก้ปัญหาของผู้ใช้ได้จริง และมีความสวยงามน่าใช้งาน"
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
                {edu.details && <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{edu.details}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;