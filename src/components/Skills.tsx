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
  Lightbulb,
  Video,
  Scissors,
  Server
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: JSX.Element;
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: Skill[];
}

interface Language {
  name: string;
  level: string;
  flag: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: 'React.js', level: 90, icon: <Code className="w-5 h-5" /> },
        { name: 'JavaScript', level: 88, icon: <Code className="w-5 h-5" /> },
        { name: 'HTML5 & CSS3', level: 95, icon: <Code className="w-5 h-5" /> },
        { name: 'Tailwind CSS', level: 92, icon: <Palette className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Backend & Database',
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: 'Node.js', level: 80, icon: <Server className="w-5 h-5" /> },
        { name: 'MongoDB', level: 75, icon: <Database className="w-5 h-5" /> },
        { name: 'SQL', level: 78, icon: <Database className="w-5 h-5" /> },
        { name: 'REST APIs', level: 82, icon: <Server className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Video Editing & Creative',
      icon: <Video className="w-8 h-8" />,
      skills: [
        { name: 'Adobe Premiere Pro', level: 95, icon: <Video className="w-5 h-5" /> },
        { name: 'CapCut', level: 98, icon: <Scissors className="w-5 h-5" /> },
        { name: 'Color Grading', level: 85, icon: <Palette className="w-5 h-5" /> },
        { name: 'Motion Graphics', level: 80, icon: <Video className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Soft Skills',
      icon: <Brain className="w-8 h-8" />,
      skills: [
        { name: 'Problem Solving', level: 92, icon: <Brain className="w-5 h-5" /> },
        { name: 'Critical Thinking', level: 90, icon: <Brain className="w-5 h-5" /> },
        { name: 'Team Collaboration', level: 88, icon: <Users className="w-5 h-5" /> },
        { name: 'Leadership', level: 85, icon: <Crown className="w-5 h-5" /> }
      ]
    }
  ];

  const languages: Language[] = [
    { name: 'English', level: 'Fluent', flag: '🌐' },
    { name: 'Urdu', level: 'Native', flag: '🏠' },
    { name: 'Potohari', level: 'Fluent', flag: '🗣️' }
  ];

  const getCategoryColor = (index: number): string => {
    const colors: string[] = [
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500', 
      'from-purple-500 to-pink-500',
      'from-orange-500 to-red-500'
    ];
    return colors[index % colors.length];
  };

  const getSkillColor = (index: number): string => {
    const colors: string[] = [
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500',
      'from-purple-500 to-pink-500', 
      'from-orange-500 to-red-500'
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="py-20 relative">
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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Mastering modern web development technologies and creative video editing
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-gradient-to-r ${getCategoryColor(categoryIndex)} rounded-xl text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-blue-400">
                          {skill.icon}
                        </div>
                        <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                      </div>
                      <span className="text-blue-400 font-semibold text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                        viewport={{ once: true }}
                        className={`bg-gradient-to-r ${getSkillColor(categoryIndex)} h-2 rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">Languages</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl mb-3">{lang.flag}</div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{lang.name}</h4>
                <span className="text-blue-400 font-medium">{lang.level}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;