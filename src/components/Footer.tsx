import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <div className="flex items-center gap-2 text-slate-300 justify-center md:justify-start">
              <span className="text-sm sm:text-base font-medium">Muhammad Mobeen Zaheer</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              © 2025 All rights reserved. Full Stack Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 sm:gap-6"
          >
            <div className="text-xs sm:text-sm text-slate-400 text-center">
              Currently pursuing Computer Science at IST
            </div>
            <button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full text-white hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 group"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;