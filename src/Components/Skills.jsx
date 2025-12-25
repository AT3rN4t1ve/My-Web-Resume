import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../Data/portfolio';
import SectionTitle from './SectionTitle';

const Skills = () => {
  return (
    <section id="skills" className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Technical Skills" subtitle="Tools And Tech Stack" />
        
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
                  <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
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
                  <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
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

export default Skills;