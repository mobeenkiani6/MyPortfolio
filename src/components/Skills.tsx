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
  Zap
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
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', icon: <Code className="w-6 h-6" />, color: 'text-cyan-400' },
        { name: 'Next.js', icon: <Globe className="w-6 h-6" />, color: 'text-white' },
        { name: 'TypeScript', icon: <Code className="w-6 h-6" />, color: 'text-blue-500' },
        { name: 'Tailwind CSS', icon: <Palette className="w-6 h-6" />, color: 'text-cyan-300' },
        { name: 'Redux', icon: <Zap className="w-6 h-6" />, color: 'text-purple-500' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: <Server className="w-6 h-6" />, color: 'text-green-500' },
        { name: 'Express.js', icon: <Cpu className="w-6 h-6" />, color: 'text-gray-400' },
        { name: 'MongoDB', icon: <Database className="w-6 h-6" />, color: 'text-green-400' },
        { name: 'REST APIs', icon: <Globe className="w-6 h-6" />, color: 'text-blue-400' },
        { name: 'Socket.io', icon: <Zap className="w-6 h-6" />, color: 'text-white' }
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git & GitHub', icon: <Code className="w-6 h-6" />, color: 'text-orange-500' },
        { name: 'VS Code', icon: <Monitor className="w-6 h-6" />, color: 'text-blue-500' },
        { name: 'Postman', icon: <Server className="w-6 h-6" />, color: 'text-orange-400' },
        { name: 'Deployment', icon: <Layout className="w-6 h-6" />, color: 'text-purple-400' }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', icon: <Brain className="w-6 h-6" />, color: 'text-yellow-400' },
        { name: 'Critical Thinking', icon: <Zap className="w-6 h-6" />, color: 'text-blue-400' },
        { name: 'Team Collaboration', icon: <Users className="w-6 h-6" />, color: 'text-green-400' },
        { name: 'Communication', icon: <Crown className="w-6 h-6" />, color: 'text-pink-400' }
      ]
    }
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

        <div className="grid gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-violet-500">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05, translateY: -5 }}
                    className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 text-center group cursor-default hover:border-violet-500/50 transition-all duration-300"
                  >
                    <div className={`p-3 rounded-full bg-slate-900/50 group-hover:bg-slate-800/80 transition-colors ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;