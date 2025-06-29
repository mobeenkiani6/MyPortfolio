import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code, Video } from 'lucide-react';

const Experience = () => {
  const experiences = [
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
    },
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
      title: 'Video Editor',
      company: 'Freelance',
      location: 'Remote',
      period: 'Jan 2023 - Present',
      type: 'creative',
      description: [
        'Edited and produced short-form videos for social media platforms, resulting in increased viewer engagement',
        'Utilized Adobe Premiere Pro and CapCut to add effects, transitions, and animations',
        'Worked closely with clients to ensure the final video content met their expectations and project goals',
        'Specialized in creating engaging content for YouTube, Instagram, and TikTok platforms'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Institute of Space Technology (IST)',
      period: 'Sep 2023 - Present',
      status: 'Current'
    },
    {
      degree: 'Intermediate in Computer Science',
      institution: 'Punjab College of Science and Technology Islamabad',
      period: 'Dec 2021 - May 2023',
      status: 'Completed'
    },
    {
      degree: 'Matric - Science Subjects',
      institution: 'Army Public School (APSACS) Pothwar Islamabad',
      period: 'Jan 2020 - Dec 2021',
      status: 'Completed'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-blue-400" />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2 sm:mb-0">
                      {exp.type === 'development' ? (
                        <Code className="text-blue-400 flex-shrink-0" size={20} />
                      ) : (
                        <Video className="text-purple-400 flex-shrink-0" size={20} />
                      )}
                      <h4 className="text-lg sm:text-xl font-semibold text-white">{exp.title}</h4>
                    </div>
                    <div className="flex items-center gap-2 text-blue-400 text-sm">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mb-4 text-sm">
                    <MapPin size={16} />
                    <span>{exp.company} • {exp.location}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2 text-sm sm:text-base">
                        <span className={`${exp.type === 'development' ? 'text-blue-400' : 'text-purple-400'} mt-2 flex-shrink-0`}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-base sm:text-lg font-semibold text-white pr-2">{edu.degree}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                      edu.status === 'Current' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-2 text-sm sm:text-base">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <Calendar size={16} />
                    {edu.period}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;