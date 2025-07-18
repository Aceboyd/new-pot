import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Rocket, TrendingUp, Building, Scale, Briefcase } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Crypto Pulse",
      subtitle: "AvaxTrade + GrowthSphere",
      description: "A dual-platform experience showcasing real-time crypto data, trends, and news updates through advanced API integrations.",
      tech: ["React.js", "Tailwind CSS", "CoinGecko API", "News API", "Vercel"],
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      links: [
        { name: "AvaxTrade", url: "https://avaxtrade.vercel.app" },
        { name: "GrowthSphere", url: "https://growth-one-phi.vercel.app" }
      ],
      features: ["Real-time crypto data", "News integration", "Responsive design", "API optimization"]
    },
    {
      id: 2,
      title: "Randy Coleman Engineering",
      subtitle: "Corporate Construction Website",
      description: "A professional-grade website built for a Nigerian engineering company to showcase services, projects, and client trust.",
      tech: ["React.js", "Tailwind CSS", "Web3Forms", "Vercel"],
      icon: <Building className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      links: [
        { name: "Live Site", url: "https://randycolemanengr.com" }
      ],
      features: ["Corporate design", "Contact forms", "Service showcase", "Mobile responsive"]
    },
    {
      id: 3,
      title: "Coleman Consult Law",
      subtitle: "Legal Consultancy Website",
      description: "Created a modern digital home for a law firm to present legal services, team information, and inquiry options.",
      tech: ["React.js", "Tailwind CSS", "Web3Forms", "Vercel"],
      icon: <Scale className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      links: [
        { name: "Live Site", url: "https://colemanconsultlaw.com" }
      ],
      features: ["Professional layout", "Team profiles", "Service pages", "Clean design"]
    },
    {
      id: 4,
      title: "Capstone Scholarship Platform",
      subtitle: "Team Internship Project",
      description: "Built in a collaborative internship environment. The platform allows students to register and apply for scholarships.",
      tech: ["React.js", "Tailwind CSS", "Web3Forms", "GitHub", "Vercel"],
      icon: <Rocket className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-500",
      links: [
        { name: "Live Demo", url: "https://capstone-scholarship-design-system.vercel.app" }
      ],
      features: ["Student registration", "Application forms", "Team collaboration", "Role-based flows"]
    },
    {
      id: 5,
      title: "GRIMS Enterprise",
      subtitle: "Business Portfolio Website",
      description: "A modern, responsive website for GRIMS Enterprise, showcasing their services, portfolio, and contact options with a sleek user interface.",
      tech: ["React.js", "Tailwind CSS", "Netlify"],
      icon: <Briefcase className="w-6 h-6" />,
      gradient: "from-indigo-500 to-blue-500",
      links: [
        { name: "Live Site", url: "https://grims.netlify.app" }
      ],
      features: ["Modern UI", "Service showcase", "Contact integration", "Responsive design"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent px-4 sm:px-0">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            A showcase of my recent work, demonstrating expertise in React, API integration, and modern web development.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-0">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.id * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 w-full"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-4 sm:p-6 text-white`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                    <p className="text-white/80 text-xs sm:text-sm">{project.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                  {project.links.map((link, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center sm:justify-start gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 sm:px-4 py-2 rounded-lg transition-colors text-xs sm:text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {link.name}
                    </motion.a>
                  ))}
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
          className="text-center mt-12 sm:mt-16 px-4 sm:px-0"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              I'm always excited to work on new challenges and bring ideas to life with clean, modern code.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg text-sm sm:text-base"
            >
              Let's Work Together
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;