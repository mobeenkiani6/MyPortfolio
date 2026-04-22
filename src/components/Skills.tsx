import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Palette,
  Brain,
  Users,
  Crown,
  Monitor,
  Server,
  Layout,
  Globe,
  Cpu,
  Zap,
  Video,
  PenTool,
  Image,
  Figma
} from 'lucide-react';

interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const row1 = [
    { name: 'React.js', icon: <Code className="w-5 h-5" />, color: 'text-cyan-400' },
    { name: 'Next.js', icon: <Globe className="w-5 h-5" />, color: 'text-white' },
    { name: 'TypeScript', icon: <Code className="w-5 h-5" />, color: 'text-blue-500' },
    { name: 'Tailwind CSS', icon: <Palette className="w-5 h-5" />, color: 'text-cyan-300' },
    { name: 'Redux', icon: <Zap className="w-5 h-5" />, color: 'text-purple-500' },
    { name: 'Node.js', icon: <Server className="w-5 h-5" />, color: 'text-green-500' },
    { name: 'Express.js', icon: <Cpu className="w-5 h-5" />, color: 'text-gray-400' },
    { name: 'REST APIs', icon: <Globe className="w-5 h-5" />, color: 'text-blue-400' },
  ];

  const row2 = [
    { name: 'MongoDB', icon: <Database className="w-5 h-5" />, color: 'text-green-400' },
    { name: 'PostgreSQL', icon: <Database className="w-5 h-5" />, color: 'text-blue-400' },
    { name: 'Socket.io', icon: <Zap className="w-5 h-5" />, color: 'text-white' },
    { name: 'Git & GitHub', icon: <Code className="w-5 h-5" />, color: 'text-orange-500' },
    { name: 'Docker', icon: <Server className="w-5 h-5" />, color: 'text-blue-500' },
    { name: 'VS Code', icon: <Monitor className="w-5 h-5" />, color: 'text-blue-500' },
    { name: 'Postman', icon: <Server className="w-5 h-5" />, color: 'text-orange-400' },
    { name: 'Deployment', icon: <Layout className="w-5 h-5" />, color: 'text-purple-400' }
  ];

  const row3 = [
    { name: 'Video Editing', icon: <Video className="w-5 h-5" />, color: 'text-fuchsia-400' },
    { name: 'Graphic Design', icon: <PenTool className="w-5 h-5" />, color: 'text-cyan-400' },
    { name: 'UI/UX Design', icon: <Figma className="w-5 h-5" />, color: 'text-purple-400' },
    { name: 'Problem Solving', icon: <Brain className="w-5 h-5" />, color: 'text-yellow-400' },
    { name: 'Critical Thinking', icon: <Zap className="w-5 h-5" />, color: 'text-blue-400' },
    { name: 'Collaboration', icon: <Users className="w-5 h-5" />, color: 'text-green-400' },
    { name: 'Communication', icon: <Crown className="w-5 h-5" />, color: 'text-pink-400' }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -left-10 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building scalable, modern web applications.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10 mt-12 mask-edges pause-hover">
          
          {/* Row 1 - Left Scrolling */}
          <div className="relative w-full overflow-hidden">
            <span className="absolute -top-4 left-10 text-xs font-bold text-violet-500 tracking-wider uppercase bg-slate-950/80 px-2 z-10">Frontend & Backend</span>
            <div className="animate-scroll-left flex gap-6 mt-4 items-center">
              {[...row1, ...row1, ...row1].map((skill, index) => (
                <div
                  key={`r1-${index}`}
                  className="glass-card flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-full group cursor-pointer hover:scale-110 hover:border-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all duration-300"
                >
                  <div className={`p-2 rounded-full bg-slate-900/50 group-hover:bg-slate-800 ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <span className="text-slate-300 font-medium whitespace-nowrap group-hover:text-white">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right Scrolling */}
          <div className="relative w-full overflow-hidden">
            <span className="absolute -top-4 right-10 text-xs font-bold text-fuchsia-500 tracking-wider uppercase bg-slate-950/80 px-2 z-10">Tools & Databases</span>
            <div className="animate-scroll-right flex gap-6 mt-4 items-center" style={{ animationDirection: 'reverse' }}>
              {[...row2, ...row2, ...row2].map((skill, index) => (
                <div
                  key={`r2-${index}`}
                  className="glass-card flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-full group cursor-pointer hover:scale-110 hover:border-fuchsia-400 hover:shadow-[0_0_20px_rgba(217,70,239,0.6)] transition-all duration-300"
                >
                  <div className={`p-2 rounded-full bg-slate-900/50 group-hover:bg-slate-800 ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <span className="text-slate-300 font-medium whitespace-nowrap group-hover:text-white">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Left Scrolling */}
          <div className="relative w-full overflow-hidden">
            <span className="absolute -top-4 left-10 text-xs font-bold text-cyan-500 tracking-wider uppercase bg-slate-950/80 px-2 z-10">Soft Skills & Design</span>
            <div className="animate-scroll-left flex gap-6 mt-4 items-center">
              {[...row3, ...row3, ...row3].map((skill, index) => (
                <div
                  key={`r3-${index}`}
                  className="glass-card flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-full group cursor-pointer hover:scale-110 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all duration-300"
                >
                  <div className={`p-2 rounded-full bg-slate-900/50 group-hover:bg-slate-800 ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <span className="text-slate-300 font-medium whitespace-nowrap group-hover:text-white">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;