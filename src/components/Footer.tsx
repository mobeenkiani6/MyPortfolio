import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <div className="flex items-center gap-2 text-gray-300">
              <span>Muhammad Mobeen Zaheer</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              © 2025 All rights reserved. Creative Designer & Video Editor
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <div className="text-sm text-gray-400">
              Currently pursuing Computer Science at IST
            </div>
            <button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <ArrowUp size={20} />
            </button>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;