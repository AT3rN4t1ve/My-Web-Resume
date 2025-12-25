import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../Data/portfolio';
import SectionTitle from './SectionTitle';

const Experience = () => {
  return (
    <section id="experience" className="py-20 transition-colors duration-300">
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Experience" subtitle="Work Experience and Skill Development" />
        
        <div className="space-y-12">
          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex items-start justify-between group">
                {/* Left Column - Date, Role, Company */}
                <div className="md:w-1/3 md:pr-8 md:text-right mb-2 md:mb-0">
                  <div className="flex items-center md:justify-end text-indigo-600 dark:text-indigo-400 font-bold">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-1">{exp.role}</h4>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{exp.company}</p>
                </div>

                {/* Center - Timeline Dot */}
                <div className="hidden md:block w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-800 shadow absolute left-[33.33%] transform -translate-x-1/2 mt-1.5 z-10"></div>
                
                {/* Vertical Line */}
                <div className="hidden md:block absolute left-[33.33%] top-2 bottom-[-48px] w-0.5 bg-gray-200 dark:bg-slate-700 transform -translate-x-1/2 last:hidden"></div>

                {/* Right Column - Description & Achievements */}
                <div className="md:w-2/3 md:pl-8 border-l-2 border-gray-200 dark:border-slate-700 md:border-l-0 pl-4 md:pl-0 ml-[-2px] md:ml-0 pb-8 md:pb-0">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                     <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                       {exp.description}
                     </p>
                     
                     {/* Achievements Section - เพิ่มส่วนนี้ */}
                     {exp.achievements && exp.achievements.length > 0 && (
                       <div className="mb-4">
                         <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                           <CheckCircle size={16} className="mr-2 text-green-500" />
                           Key Achievements:
                         </h5>
                         <ul className="space-y-2">
                           {exp.achievements.map((achievement, idx) => (
                             <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                               <span className="mr-2 mt-1">•</span>
                               <span>{achievement}</span>
                             </li>
                           ))}
                         </ul>
                       </div>
                     )}
                     
                     {/* Tags */}
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

export default Experience;