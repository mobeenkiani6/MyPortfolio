import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Calendar, Tag, Code, Palette } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'YouTube Gaming Montage',
      category: 'Video Editing',
      description: 'High-energy gaming montage with dynamic transitions, color grading, and synchronized audio effects for a popular gaming YouTuber.',
      thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://player.vimeo.com/video/sample',
      tags: ['Adobe Premiere Pro', 'Color Grading', 'Gaming'],
      date: '2024',
      duration: '3:45'
    },
    {
      id: 2,
      title: 'Instagram Reels Series',
      category: 'Video Editing',
      description: 'Created a series of viral Instagram Reels with trending effects, smooth transitions, and engaging storytelling for lifestyle brand.',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://player.vimeo.com/video/sample',
      tags: ['CapCut', 'Social Media', 'Trending Effects'],
      date: '2024',
      duration: '0:30'
    },
    {
      id: 3,
      title: 'Product Launch Campaign',
      category: 'Video Editing',
      description: 'Professional product launch video with motion graphics, 3D text animations, and cinematic color grading for tech startup.',
      thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://player.vimeo.com/video/sample',
      tags: ['Adobe Premiere Pro', 'Motion Graphics', 'Product Video'],
      date: '2024',
      duration: '2:15'
    },
    {
      id: 4,
      title: 'Travel Vlog Documentary',
      category: 'Video Editing',
      description: 'Cinematic travel documentary with drone footage integration, color correction, and immersive storytelling techniques.',
      thumbnail: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://player.vimeo.com/video/sample',
      tags: ['Cinematic Editing', 'Color Correction', 'Documentary'],
      date: '2024',
      duration: '8:20'
    },
    {
      id: 5,
      title: 'Music Video Edit',
      category: 'Video Editing',
      description: 'Creative music video with beat synchronization, visual effects, and artistic color grading to match the song\'s mood.',
      thumbnail: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://player.vimeo.com/video/sample',
      tags: ['Music Video', 'Beat Sync', 'Visual Effects'],
      date: '2023',
      duration: '4:12'
    },
    {
      id: 6,
      title: 'Corporate Training Series',
      category: 'Video Editing',
      description: 'Professional training video series with screen recordings, animated explanations, and clear audio enhancement.',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://player.vimeo.com/video/sample',
      tags: ['Corporate Video', 'Screen Recording', 'Educational'],
      date: '2023',
      duration: '12:30'
    },
    {
      id: 7,
      title: 'Brand Identity Package',
      category: 'Graphic Design',
      description: 'Complete brand identity design including logo, business cards, letterhead, and brand guidelines for a tech startup.',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://player.vimeo.com/video/sample',
      tags: ['Adobe Illustrator', 'Brand Identity', 'Logo Design'],
      date: '2024',
      duration: '1:30'
    },
    {
      id: 8,
      title: 'Portfolio Website',
      category: 'Full Stack Development',
      description: 'Responsive portfolio website built with React.js, featuring smooth animations, modern design, and optimized performance.',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://player.vimeo.com/video/sample',
      tags: ['React JS', 'JavaScript', 'Responsive Design'],
      date: '2024',
      duration: '2:00'
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const categories = ['All', 'Video Editing', 'Graphic Design', 'Full Stack Development'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Video Editing':
        return <Play className="w-4 h-4" />;
      case 'Graphic Design':
        return <Palette className="w-4 h-4" />;
      case 'Full Stack Development':
        return <Code className="w-4 h-4" />;
      default:
        return <Play className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Video Editing':
        return 'bg-purple-500/80 text-white';
      case 'Graphic Design':
        return 'bg-pink-500/80 text-white';
      case 'Full Stack Development':
        return 'bg-blue-500/80 text-white';
      default:
        return 'bg-purple-500/80 text-white';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Showcasing my video editing expertise and creative projects
          </p>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category !== 'All' && getCategoryIcon(category)}
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              {/* Project Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-colors duration-200">
                    <Play size={24} className="text-white ml-1" />
                  </button>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-sm">
                  {project.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getCategoryColor(project.category)}`}>
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={14} />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded text-xs text-gray-300"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                    <Play size={16} />
                    View Project
                  </button>
                  <button className="p-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Ready to bring your vision to life? Let's create something amazing together!
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;