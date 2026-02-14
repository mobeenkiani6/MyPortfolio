import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowRight
} from "lucide-react";

// Imports updated by user
import pic1 from "./LBF.jpeg";
import pic2 from "./sub.jpeg";
import pic3 from "./medi.jpeg";
import pic4 from "./moto.jpeg";
import pic5 from "./inventory.jpeg";
import pic6 from "./p1.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "LostButFound",
      category: "Full Stack",
      description: "A secure MERN stack application connecting people who have lost items with those who found them. Features user authentication, item posting/searching, and secure communication.",
      image: pic1,
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "TailwindCSS"],
      githubUrl: "https://github.com/mobeenkiani6/LostButFound",
      featured: true
    },
    {
      id: 2,
      title: "SubTracker",
      category: "Full Stack",
      description: "Subscription management dashboard to track recurring expenses. Visualizes spending, monitors renewals, and categorizes subscriptions for better financial control.",
      image: pic2,
      techStack: ["React.js", "Node.js", "Chart.js", "MongoDB"],
      githubUrl: "https://github.com/mobeenkiani6/SubTracker",
      featured: true
    },
    {
      id: 3,
      title: "Inventory Management System",
      category: "Management System",
      description: "Comprehensive dashboard for businesses to track products, sales, and locations. Provides real-time visibility into stock levels and purchasing data.",
      image: pic5,
      techStack: ["MERN Stack", "Redux", "Material UI", "Analytics"],
      githubUrl: "https://github.com/mobeenkiani6/Inventory-Management-System-React",
    },
    {
      id: 4,
      title: "Medi-Bridge",
      category: "Healthcare",
      description: "Emergency coordination platform connecting donors, hospitals, and blood banks. Manages blood/medicine inventory and broadcasts urgent shortage alerts.",
      image: pic3,
      techStack: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      githubUrl: "https://github.com/mobeenkiani6/Medi-Bridge",
    },
    {
      id: 5,
      title: "MotoHub",
      category: "E-Commerce",
      description: "A complete full-stack e-commerce platform built for a Bike Showroom, allowing users to browse, buy, and sell bikes and spare parts. Features secure authentication and a scalable backend.",
      image: pic4,
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/mobeenkiani6/Bike-ShowRoom",
    },
    {
      id: 6,
      title: "Travel Craft",
      category: "AI / Full Stack",
      description: "AI-powered travel planner that generates personalized itineraries based on user preferences. Integrates mapping services and smart recommendations.",
      image: pic6,
      techStack: ["React.js", "Node.js", "OpenAI API", "Mapbox"],
      githubUrl: "https://github.com/mobeenkiani6/Travel-Craft",
    }
  ];

  const categories = ["All", "Full Stack", "E-Commerce", "Healthcare", "Management System"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory || (activeCategory === "Full Stack" && p.category === "AI / Full Stack"));

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
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Solving real-world problems with modern full-stack solutions
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-semibold bg-violet-600/90 text-white rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 flex-shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                        title="View Code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                        title="View Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-300 mb-6 text-sm line-clamp-3 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium text-violet-300 bg-violet-500/10 rounded-full border border-violet-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/mobeenkiani6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-semibold transition-all duration-300 group"
          >
            <Github size={20} />
            View More on GitHub
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
