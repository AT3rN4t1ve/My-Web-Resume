import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, Copy, Check } from 'lucide-react';
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
    // แปลข้อความแจ้งเตือน (Alert) เป็นภาษาอังกฤษ
    alert("The messaging system is currently under maintenance. Please contact via Email directly.");
    formRef.current.reset();
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get In Touch" subtitle="Interested in collaboration or have questions? Feel free to ask." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-700">
          
          {/* Contact Info (Left Side) */}
          <div className="p-8 bg-indigo-600 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
              <p className="text-indigo-100 mb-8">
                The most convenient way to contact me is via Email or LinkedIn.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 text-indigo-300" />
                  <div>
                    <p className="text-sm text-indigo-200">Email</p>
                    <p className="font-medium break-all">{PORTFOLIO_DATA.personal.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 text-indigo-300" />
                  <div>
                    <p className="text-sm text-indigo-200">Location</p>
                    <p className="font-medium">{PORTFOLIO_DATA.personal.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-indigo-200 text-sm mb-4">Follow me</p>
              <div className="flex space-x-4">
                <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="p-2 bg-indigo-500 rounded-full hover:bg-indigo-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-indigo-500 rounded-full hover:bg-indigo-400 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Actions (Right Side) */}
          <div className="p-8 flex flex-col justify-center">
            
            {/* ส่วนที่ 1: แสดง Email แบบง่าย (Active) */}
            <div className="space-y-6 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Send me a message
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                    Currently, the web form is under maintenance. <br/>
                    You can send an email to me directly at:
                </p>

                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-700 break-all text-center">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                        {PORTFOLIO_DATA.personal.email}
                    </span>
                </div>

                <div className="flex flex-col gap-3">
                    <a 
                        href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                        className="w-full flex justify-center items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-all"
                    >
                        <Send size={18} className="mr-2" />
                        Send Email (Open Mail App)
                    </a>
                    
                    <button 
                        onClick={handleCopyEmail}
                        className="w-full flex justify-center items-center px-6 py-3 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-white font-medium rounded-md hover:bg-gray-50 dark:hover:bg-slate-600 transition-all"
                    >
                        {copied ? <Check size={18} className="mr-2 text-green-500" /> : <Copy size={18} className="mr-2" />}
                        {copied ? 'Copied!' : 'Copy Email Address'}
                    </button>
                </div>
            </div>

            {/* ส่วนที่ 2: ฟอร์มเต็ม (Comment เก็บไว้ก่อน รอเชื่อมต่อ EmailJS ทีหลัง) */}
            {/* <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                <input required type="text" id="name" name="user_name" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input required type="email" id="email" name="user_email" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea required id="message" name="message" rows="4" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="Hello, I'd like to talk about..."></textarea>
              </div>
              <button type="submit" className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors shadow-md">
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
            */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;