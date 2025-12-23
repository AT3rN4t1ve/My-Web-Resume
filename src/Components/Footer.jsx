import React from 'react';
import { PORTFOLIO_DATA } from '../Data/portfolio';

const Footer = () => (
  <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 py-8 text-center transition-colors duration-300">
    <p className="text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name} | Full Stack Developer
    </p>
  </footer>
);

export default Footer;