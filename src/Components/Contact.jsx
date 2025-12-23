import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../Data/portfolio';
import SectionTitle from './SectionTitle';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const formRef = useRef();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("ขอบคุณที่ติดต่อ! นี่เป็นเพียงแบบฟอร์มจำลอง (UI Only)");
    formRef.current.reset();
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get In Touch" subtitle="สนใจร่วมงานหรือมีคำถาม สอบถามได้เลยครับ" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl">
          
          <div className="p-8 bg-indigo-600 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-indigo-100 mb-8">
                ผมกำลังมองหาโอกาสในการฝึกงาน หรือ Junior Position หากบริษัทของคุณกำลังมองหาคนที่พร้อมเรียนรู้ ติดต่อผมได้เลยครับ
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="text-indigo-200" />
                  <span className="break-all">{PORTFOLIO_DATA.personal.email}</span>
                  <button 
                    onClick={handleCopyEmail}
                    className="text-xs bg-indigo-500 hover:bg-indigo-400 px-2 py-1 rounded transition-colors shrink-0"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-indigo-200" />
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="p-2 bg-indigo-500 rounded-full hover:bg-indigo-400 transition-colors">
                <Github size={20} />
              </a>
              <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-indigo-500 rounded-full hover:bg-indigo-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input required type="text" id="name" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input required type="email" id="email" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea required id="message" rows="4" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="Hello, I'd like to talk about..."></textarea>
              </div>
              <button type="submit" className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all hover:shadow-lg">
                Send Message <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;