import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send } from 'lucide-react'; // เช็คว่า import ครบ
import { PORTFOLIO_DATA } from '../Data/portfolio';
import SectionTitle from './SectionTitle';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle title="Get In Touch" subtitle="สนใจร่วมงานหรือมีคำถาม สอบถามได้เลยครับ" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 max-w-2xl mx-auto"
        >
          <Mail className="w-16 h-16 text-indigo-500 mx-auto mb-6" />
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            พร้อมร่วมงานทันที!
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            หากคุณกำลังมองหา Developer ที่พร้อมเรียนรู้และเติบโต <br/>
            สามารถส่งอีเมลหาผมได้โดยตรง หรือ Copy อีเมลไปได้เลยครับ
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* ปุ่มกดแล้วเด้งไปหน้าส่งเมล (mailto) */}
            <a 
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors w-full sm:w-auto justify-center"
            >
              <Send size={20} className="mr-2" />
              ส่งอีเมลหาผม
            </a>

            {/* ปุ่ม Copy Email */}
            <button 
              onClick={handleCopyEmail}
              className="flex items-center px-6 py-3 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 text-gray-700 dark:text-white rounded-full font-medium transition-colors w-full sm:w-auto justify-center"
            >
              {copied ? <Check size={20} className="mr-2 text-green-500" /> : <Copy size={20} className="mr-2" />}
              {copied ? 'คัดลอกเรียบร้อย' : 'Copy Email'}
            </button>
          </div>
          
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Email: {PORTFOLIO_DATA.personal.email}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;