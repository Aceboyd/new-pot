import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe, Smartphone, Zap, Cloud, Users, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 95, description: "Component-based architecture, hooks, state management" },
        { name: "JavaScript", level: 90, description: "ES6+, async/await, modern JS features" },
        { name: "Tailwind CSS", level: 95, description: "Utility-first CSS, responsive design" },
        { name: "HTML5", level: 95, description: "Semantic markup, accessibility best practices" }
      ]
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "Responsive Design", level: 90, description: "Mobile-first approach, flexible layouts" },
        { name: "User Experience", level: 85, description: "Intuitive interfaces, user-centered design" },
        { name: "Design Systems", level: 80, description: "Consistent components, style guides" },
        { name: "Accessibility", level: 85, description: "WCAG compliance, inclusive design" }
      ]
    },
    {
      title: "API Integration",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-500",
      skills: [
        { name: "REST APIs", level: 90, description: "HTTP methods, data fetching, error handling" },
        { name: "CoinGecko API", level: 85, description: "Cryptocurrency data integration" },
        { name: "News API", level: 85, description: "Real-time news feeds and updates" },
        { name: "Django Integration", level: 80, description: "Backend communication, data flow" }
      ]
    },
    {
      title: "Tools & Deployment",
      icon: <Cloud className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "Vercel", level: 95, description: "Deployment, hosting, CI/CD workflows" },
        { name: "GitHub", level: 90, description: "Version control, collaboration, project management" },
        { name: "Cloudinary", level: 85, description: "Media management, image optimization" },
        { name: "Web3Forms", level: 90, description: "Form handling, user interactions" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      gradient: "from-indigo-500 to-blue-500",
      skills: [
        { name: "Node.js", level: 85, description: "Server-side JavaScript, asynchronous programming" },
        { name: "Express.js", level: 80, description: "RESTful API development, middleware" },
        { name: "MongoDB", level: 80, description: "NoSQL database, schema design, querying" }
      ]
    }
  ];

  const additionalSkills = [
    { name: "React Native", icon: <Smartphone className="w-5 h-5" />, color: "text-blue-600" },
    { name: "Basin", icon: <Zap className="w-5 h-5" />, color: "text-purple-600" },
    { name: "Team Collaboration", icon: <Users className="w-5 h-5" />, color: "text-green-600" },
    { name: "Problem Solving", icon: <Globe className="w-5 h-5" />, color: "text-orange-600" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent px-4 sm:px-0">
            Skills & Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            A comprehensive toolkit for building modern, scalable web applications with focus on user experience and performance.
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16 px-4 sm:px-0">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/90 rounded-xl p-3 sm:p-4 shadow-md border border-white/30"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-800 text-sm sm:text-base">{skill.name}</span>
                      <span className="text-xs sm:text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className={`bg-gradient-to-r ${category.gradient} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="max-w-4xl mx-auto px-4 sm:px-0">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800"
          >
            Additional Skills & Technologies
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 ${skill.color} bg-gray-50 rounded-lg flex items-center justify-center`}>
                  {skill.icon}
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Journey */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 mt-12 sm:mt-16 max-w-4xl mx-auto shadow-xl border border-white/20"
        >
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Learning Journey
            </h3>
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              From Geology graduate to Full Stack Developer - a self-taught journey powered by curiosity and dedication.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/90 rounded-xl p-3 sm:p-4 shadow-lg border border-white/30"
              >
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">2023</div>
                <div className="text-xs sm:text-sm text-gray-600">Started Learning</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/90 rounded-xl p-3 sm:p-4 shadow-lg border border-white/30"
              >
                <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-1">4+</div>
                <div className="text-xs sm:text-sm text-gray-600">Projects Built</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/90 rounded-xl p-3 sm:p-4 shadow-lg border border-white/30"
              >
                <div className="text-xl sm:text-2xl font-bold text-pink-600 mb-1">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">Self-Taught</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;