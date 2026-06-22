import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="mb-14 text-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
        {title}
      </span>
    </h2>
    {/* Accent divider — cyan glow */}
    <div className="h-[3px] w-16 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 mb-4 shadow-[0_0_12px_rgba(6,182,212,0.5)]" />
    {subtitle && (
      <p className="text-gray-500 dark:text-slate-400 max-w-2xl mx-auto text-base">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionTitle;