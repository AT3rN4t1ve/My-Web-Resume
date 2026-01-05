import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../Data/portfolio'; // ตรวจสอบ path ให้ตรงกับเครื่องคุณนะครับ
import SectionTitle from './SectionTitle';

const Skills = () => {
  // สไตล์กลางสำหรับ Tag (จะได้ไม่ต้องเขียนซ้ำหลายรอบ)
  const tagStyle = "px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors";

  return (
    <section id="skills" className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Technical Skills" subtitle="Tools And Tech Stack" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Frontend Section */}
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
            {/* โค้ดส่วนนี้สั้นลง เพราะเปลี่ยนจากหลอดพลังเป็น Tags */}
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO_DATA.skills.frontend.map((skill, idx) => (
                <span key={idx} className={tagStyle}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 2. Backend Section */}
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
            {/* โค้ดส่วนนี้ก็สั้นลงเช่นกัน */}
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO_DATA.skills.backend.map((skill, idx) => (
                <span key={idx} className={tagStyle}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 3. Tools Section (อันนี้เหมือนเดิม แต่ใช้ตัวแปร tagStyle ร่วมกัน) */}
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
                <span key={idx} className={tagStyle}>
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

export default Skills;