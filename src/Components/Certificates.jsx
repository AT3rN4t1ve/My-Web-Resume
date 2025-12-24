import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';

const certificates = [
  {
    name: "Web Responsive Design",
    issuer: "FreeCodeCamp",
    date: "2023",
    link: "https://www.freecodecamp.org/certification/atthakit/responsive-web-design",
    image: "Web Response.png",
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Certifications" subtitle="การเรียนรู้และการพัฒนาตนเองเพิ่มเติม" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-slate-700 flex items-center gap-4 group"
            >
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                <Award size={32} />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer} • {cert.date}</p>
              </div>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
                  <ExternalLink size={20} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;