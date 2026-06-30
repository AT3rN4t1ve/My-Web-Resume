import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../Data/portfolio';
import SectionTitle from './SectionTitle';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const tagVariants = {
  hidden:  { opacity: 0, scale: 0.85, y: 8 },
  visible: { opacity: 1, scale: 1,    y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

const Skills = ({ t }) => {
  const sections = [
    {
      icon: <Layout className="w-7 h-7 text-cyan-400" />,
      title: 'Frontend',
      border: 'border-cyan-500',
      tagColor: 'text-cyan-500 dark:text-cyan-400 bg-cyan-500/8 dark:bg-cyan-500/10 border-cyan-500/20',
      items: PORTFOLIO_DATA.skills.frontend,
    },
    {
      icon: <Database className="w-7 h-7 text-emerald-400" />,
      title: 'Backend',
      border: 'border-emerald-500',
      tagColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/8 dark:bg-emerald-500/10 border-emerald-500/20',
      items: PORTFOLIO_DATA.skills.backend,
    },
    {
      icon: <Terminal className="w-7 h-7 text-violet-400" />,
      title: 'Tools & Others',
      border: 'border-violet-500',
      tagColor: 'text-violet-600 dark:text-violet-400 bg-violet-500/8 dark:bg-violet-500/10 border-violet-500/20',
      items: PORTFOLIO_DATA.skills.tools,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-[#0a0f1e] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.title} subtitle={t.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((sec, sIdx) => (
            <motion.div
              key={sec.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: sIdx * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-white dark:bg-[#111827] p-6 rounded-2xl shadow-sm border-t-[3px] ${sec.border} hover:shadow-lg transition-shadow duration-300 ${sIdx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex items-center mb-6 gap-3">
                {sec.icon}
                <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white">{sec.title}</h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="flex flex-wrap gap-2"
              >
                {sec.items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tagVariants}
                    className={`skill-tag px-3 py-1.5 text-xs font-semibold rounded-md border ${sec.tagColor} cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;