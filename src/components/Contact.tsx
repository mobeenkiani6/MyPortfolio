import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, User, MessageSquare, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically integrate EmailJS or a backend API here
    alert("Message sent! (Demo purpose)");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'zaheerkiani47@gmail.com',
      link: 'mailto:zaheerkiani47@gmail.com'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'Muhammad Mobeen Zaheer',
      link: 'https://www.linkedin.com/in/muhammad-mobeen-zaheer-kiani-7501a8266'
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: 'GitHub',
      value: 'mobeenkiani6',
      link: 'https://github.com/mobeenkiani6'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Islamabad, Pakistan',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
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
              Let's Work Together
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Get in touch and let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-slate-300 mb-8 leading-relaxed text-sm sm:text-base">
                I'm always excited to work on new projects and collaborate with creative minds.
                Whether you need a full-stack web application, a complex dashboard, or have a unique technical challenge,
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-violet-500/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-violet-500/10 rounded-lg text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-1">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-slate-400 hover:text-violet-400 transition-colors duration-200 text-sm sm:text-base break-words block"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-400 text-sm sm:text-base">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6"
            >
              <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">What I Can Help You With:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Full Stack Development',
                  'MERN Stack Applications',
                  'Dashboard & Analytics',
                  'Responsive UI/UX',
                  'API Integration',
                  'Database Design'
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 lg:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 font-medium mb-2 text-sm sm:text-base">
                    <User className="w-4 h-4 inline mr-2 text-violet-400" />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-all duration-200 text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-2 text-sm sm:text-base">
                    <Mail className="w-4 h-4 inline mr-2 text-violet-400" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-all duration-200 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-2 text-sm sm:text-base">
                  <MessageSquare className="w-4 h-4 inline mr-2 text-violet-400" />
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-all duration-200 text-sm sm:text-base"
                  placeholder="Project Subject"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-all duration-200 resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;