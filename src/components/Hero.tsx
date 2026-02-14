import React from "react";
import { motion } from "framer-motion";
import { Code, Download, Mail, MapPin, Laptop } from "lucide-react";
import profilePic from "./profile.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-600/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Muhammad
              </span>
              <br />
              <span className="text-white">Mobeen Zaheer</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-4 flex-wrap"
            >
              <div className="p-2 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <Laptop className="text-violet-400" size={24} />
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-light">
                Full Stack Developer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-8 text-slate-400 flex-wrap text-sm sm:text-base"
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-violet-400" />
                <span>Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-violet-400" />
                <span className="break-all">zaheerkiani47@gmail.com</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Passionate Full Stack Developer specializing in the MERN stack.
              Building scalable, responsive, and user-centric web applications
              that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Code
                  size={20}
                  className="group-hover:rotate-12 transition-transform"
                />
                View My Work
              </button>
              <a
                href="/MK-CV.pdf"
                download
                className="px-8 py-4 rounded-full font-semibold bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Download size={20} />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-fuchsia-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full p-2 border border-white/10 bg-white/5 backdrop-blur-sm">
                <img
                  src={profilePic}
                  alt="Muhammad Mobeen Zaheer"
                  className="w-full h-full object-cover rounded-full border-4 border-slate-900 shadow-2xl"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-slate-900 p-2 rounded-full border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-violet-500/25">
                  <Code size={28} className="text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
