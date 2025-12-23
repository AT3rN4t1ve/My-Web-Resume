import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../Data/portfolio';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Featured Projects" subtitle="ผลงานที่ผ่านมา (Click เพื่อดูโค้ด)" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-slate-700"
            >
              <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center relative group">
                <span className="text-gray-500 dark:text-gray-400 text-4xl font-bold opacity-30 select-none">
                  {project.title.charAt(0)}
                </span>
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full hover:bg-indigo-500 hover:text-white transition-colors">
                    <Github size={20} className="text-black hover:text-white" />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full hover:bg-indigo-500 hover:text-white transition-colors">
                    <ExternalLink size={20} className="text-black hover:text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1 line-clamp-3">
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

export default Projects;