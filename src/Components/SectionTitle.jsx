import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="mb-12 text-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
        {title}
      </span>
    </h2>
    <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full mb-4"></div>
    {subtitle && <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
  </motion.div>
);

export default SectionTitle;