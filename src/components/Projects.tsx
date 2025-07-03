import React from "react";
import { motion } from "framer-motion";
import {
  Play,
  ExternalLink,
  Calendar,
  Tag,
  Code,
  Palette,
  Github,
} from "lucide-react";
import pic1 from "./p1.jpg";
import pic3 from "./p3.jpg";
import v1 from "./v1.jpg";
import v2 from "./v2.jpg";
import pic2 from "./p2.jpg";
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  githubUrl?: string;
  videoUrl?: string;
  tags: string[];
  date: string;
  type: string;
  duration?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Travel Craft : Ai Travel Planner",
      category: "Full Stack Development",
      description:
        " Developed a personalized travel planner web app integrating AI-powered chatbot for travel queries.Implemented dynamic frontend with React.js and styled using Tailwind CSS.Built backend API routes with Node.js and Express for destination management and user queries.Integrated MapBox API for location data and DeepSeek, Lamma API for smart itinerary planning.Managed data flow and storage using MongoDB and ensured responsive UI/UX for all devices.",
      thumbnail: pic1,
      githubUrl: "https://github.com/mobeenkiani6/Travel-Craft",
      tags: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "AI Integration",
        "Apis",
        "Responsive",
      ],
      date: "2025",
      type: "Web App",
    },
    {
      id: 2,
      title: "Airplane Management System",
      category: "Full Stack Development",
      description:
        "Full-stack task management application with HTML5,CSS and JavaScript frontend, PHP backend, and SQL database. Features include user authentication and flight booking system.",
      thumbnail: pic2,
      githubUrl: "https://github.com/mobeenkiani6/Airplane-Management-System",
      tags: ["HTML5", "CSS", "JavaScript", "PHP", "SQL", "Full Stack"],
      date: "2024",
      type: "Full Stack",
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Frontend Development",
      description:
        "Responsive portfolio website showcasing modern web development skills. Built with React.js and Framer Motion for smooth animations.",
      thumbnail: pic3,
      githubUrl: "https://github.com/mobeenkiani6/MyPortfolio",
      tags: ["React.js", "Framer Motion", "Tailwind CSS", "Responsive"],
      date: "2024",
      type: "Portfolio",
    },
    {
      id: 4,
      title: "YouTube Gaming Montage",
      category: "Video Editing",
      description:
        "High-energy gaming montage with dynamic transitions, color grading, and synchronized audio effects for a popular gaming YouTuber.",
      thumbnail: v1,
      videoUrl:
        "https://drive.google.com/file/d/1InXFIsekHJw3f3y7QmFtPxn3eK9A1clC/view?usp=drive_link",
      tags: ["Adobe Premiere Pro", "Animation", "Gaming Montage"],
      date: "2024",
      type: "Video",
      duration: "0:53",
    },
    {
      id: 5,
      title: "Instagram Reels Series",
      category: "Video Editing",
      description:
        "Created a series of viral Instagram Reels with trending effects, smooth transitions, and engaging storytelling for lifestyle brand.",
      thumbnail: v2,
      videoUrl:
        "https://drive.google.com/file/d/1PPu3lgqWVwFjQhIhXA6r-SV1mnNsGWb7/view?usp=drive_link",
      tags: ["CapCut", "Social Media", "Trending Effects"],
      date: "2024",
      type: "Social Media",
      duration: "0:33",
    },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const categories: string[] = [
    "All",
    "Frontend Development",
    "Full Stack Development",
    "Video Editing",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const getCategoryIcon = (category: string): JSX.Element => {
    switch (category) {
      case "Frontend Development":
      case "Full Stack Development":
        return <Code className="w-4 h-4" />;
      case "Video Editing":
        return <Play className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case "Frontend Development":
        return "bg-blue-500/80 text-white";
      case "Full Stack Development":
        return "bg-green-500/80 text-white";
      case "Video Editing":
        return "bg-purple-500/80 text-white";
      default:
        return "bg-blue-500/80 text-white";
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Showcasing my development skills and creative video editing projects
          </p>

          {/* Category Filter */}
          <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {category !== "All" && getCategoryIcon(category)}
                <span className="hidden sm:inline">{category}</span>
                <span className="sm:hidden">{category.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300"
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
                    {project.category === "Video Editing" ? (
                      <Play size={24} className="text-white ml-1" />
                    ) : (
                      <ExternalLink size={24} className="text-white" />
                    )}
                  </button>
                </div>

                {/* Duration Badge for Videos */}
                {project.duration && (
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-sm">
                    {project.duration}
                  </div>
                )}

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
                    {project.type}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getCategoryColor(
                      project.category
                    )}`}
                  >
                    {getCategoryIcon(project.category)}
                    <span className="hidden sm:inline">{project.category}</span>
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={14} />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-300 mb-4 line-clamp-3 text-sm sm:text-base">
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
                  {project.category === "Video Editing" ? (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                    >
                      <Play size={16} />
                      Watch Video
                    </a>
                  ) : (
                    <>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                      >
                        <Github size={16} />
                      </a>
                    </>
                  )}
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
          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            Ready to bring your ideas to life? Let's build something amazing
            together!
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
