import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, MapPin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../Data/portfolio';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0d1424] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Educational Journey and Goals" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gray-50 dark:bg-[#111827] p-8 rounded-2xl border border-gray-100 dark:border-cyan-900/20 shadow-sm hover:shadow-cyan-500/10 hover:border-cyan-500/20 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <Terminal className="text-cyan-400" />
              About Me
            </h3>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-6">
              "{PORTFOLIO_DATA.personal.about}"
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600 dark:text-slate-400">
                <MapPin className="mr-3 h-5 w-5 text-cyan-400 flex-shrink-0" />
                {PORTFOLIO_DATA.personal.location}
              </div>
              <div className="flex items-center text-gray-600 dark:text-slate-400">
                <Mail className="mr-3 h-5 w-5 text-cyan-400 flex-shrink-0" />
                {PORTFOLIO_DATA.personal.email}
              </div>
            </div>
          </motion.div>

          {/* Education timeline */}
          <div className="space-y-8">
            {PORTFOLIO_DATA.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-8 border-l-2 border-cyan-900/30 dark:border-cyan-800/30"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-cyan-400 border-2 border-white dark:border-[#0d1424] shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                <span className="text-xs font-semibold text-cyan-500 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                  {edu.year}
                </span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-3">{edu.degree}</h4>
                <p className="text-gray-600 dark:text-slate-400 font-medium">{edu.school}</p>
                {edu.details && (
                  <p className="text-gray-500 dark:text-slate-500 text-sm mt-1">{edu.details}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;