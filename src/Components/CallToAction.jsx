import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-indigo-600 dark:bg-indigo-900 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute right-10 top-10 w-64 h-64 bg-white rounded-full mix-blend-overlay blur-3xl"></div>
            <div className="absolute left-10 bottom-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay blur-3xl"></div>
        </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-2 bg-indigo-500/30 rounded-full mb-6 backdrop-blur-sm">
             <Sparkles className="w-5 h-5 text-yellow-300 mr-2" />
             <span className="text-indigo-100 font-medium">Open to new opportunities</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have an interesting project you'd like help with?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
            I am ready to learn and collaborate on high-quality work, whether it's Frontend or Full Stack. Let's talk!
          </p>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Let's work together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;