import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Personal Projects',
      location: 'Remote',
      period: 'Jun 2023 - Present',
      type: 'development',
      description: [
        'Built full-stack applications using React.js frontend with Node.js backend',
        'Designed and implemented MongoDB databases with efficient data modeling',
        'Created RESTful APIs and handled authentication using JWT tokens',
        'Deployed applications on various platforms with CI/CD pipelines'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Freelance',
      location: 'Remote',
      period: 'Jan 2024 - Present',
      type: 'development',
      description: [
        'Developed responsive web applications using React.js, HTML5, CSS3, and JavaScript',
        'Built dynamic user interfaces with modern frameworks and libraries including Tailwind CSS',
        'Integrated RESTful APIs and managed application state using React hooks and context',
        'Collaborated with clients to deliver pixel-perfect designs and optimal user experiences',
        'Implemented responsive design principles ensuring cross-browser compatibility'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              My Development Journey
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            From coding passion to comprehensive web solutions
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Glowing Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="w-full h-1/2 bg-gradient-to-b from-violet-500 via-fuchsia-500 to-transparent"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isFirst = index === 0;
              return (
                <div key={index} className="relative flex items-center justify-between w-full">
                  {/* Left Column */}
                  <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'order-1 opacity-0'}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -50, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`glass-card p-6 sm:p-8 rounded-2xl relative group transition-all duration-300 transform perspective-1000 ${
                          isFirst ? 'border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.2)]' : ''
                        } hover:shadow-[0_15px_40px_rgba(139,92,246,0.3)]`}
                        style={{ transformStyle: "preserve-3d" }}
                        whileHover={{ translateZ: 20, scale: 1.02 }}
                      >
                        {isFirst && (
                          <div className="absolute -top-3 -right-3 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.8)] border border-violet-400 z-10 animate-pulse">
                            Current Role
                          </div>
                        )}
                        <div className="flex flex-col gap-2 mb-4">
                          <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-400 transition-colors">
                            {exp.title}
                          </h4>
                          <span className="text-violet-400 font-medium bg-violet-500/10 self-end px-3 py-1 rounded-full text-sm flex items-center gap-2">
                            <Calendar size={14} /> {exp.period}
                          </span>
                        </div>
                        <div className="flex items-center justify-end gap-2 text-slate-400 mb-6 text-sm">
                          <span>{exp.company} • {exp.location}</span>
                          <MapPin size={16} className="text-fuchsia-400" />
                        </div>
                        <ul className="space-y-3 text-left">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="text-slate-300 text-sm sm:text-base flex items-start gap-3">
                              <span className="text-violet-500 mt-1.5 flex-shrink-0 text-[10px]">♦</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>

                  {/* Center Node */}
                  <div className="w-10 h-10 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1], rotate: [0, 180, 360] }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className={`w-8 h-8 rounded-full z-20 ${
                        isFirst 
                          ? 'bg-violet-500 border-4 border-fuchsia-400 shadow-[0_0_30px_rgba(217,70,239,1)]' 
                          : 'bg-slate-900 border-4 border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.8)]'
                      }`}
                    />
                  </div>

                  {/* Right Column */}
                  <div className={`w-5/12 ${!isEven ? 'pl-8 text-left order-2' : 'opacity-0'}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`glass-card p-6 sm:p-8 rounded-2xl relative group transition-all duration-300 transform perspective-1000 ${
                          isFirst ? 'border-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.2)]' : ''
                        } hover:shadow-[0_15px_40px_rgba(217,70,239,0.3)]`}
                        style={{ transformStyle: "preserve-3d" }}
                        whileHover={{ translateZ: 20, scale: 1.02 }}
                      >
                        {isFirst && (
                          <div className="absolute -top-3 -left-3 bg-fuchsia-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(217,70,239,0.8)] border border-fuchsia-400 z-10 animate-pulse">
                            Current Role
                          </div>
                        )}
                        <div className="flex flex-col gap-2 mb-4">
                          <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">
                            {exp.title}
                          </h4>
                          <span className="text-fuchsia-400 font-medium bg-fuchsia-500/10 self-start px-3 py-1 rounded-full text-sm flex items-center gap-2">
                            <Calendar size={14} /> {exp.period}
                          </span>
                        </div>
                        <div className="flex items-center justify-start gap-2 text-slate-400 mb-6 text-sm">
                          <MapPin size={16} className="text-violet-400" />
                          <span>{exp.company} • {exp.location}</span>
                        </div>
                        <ul className="space-y-3">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="text-slate-300 text-sm sm:text-base flex items-start gap-3">
                              <span className="text-fuchsia-500 mt-1.5 flex-shrink-0 text-[10px]">♦</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;