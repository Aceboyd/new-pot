import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Youtube, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent px-4 sm:px-0">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              A passionate frontend developer with a unique background in Geology, 
              now creating digital experiences that matter.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center px-4 sm:px-0">
            {/* Left Column - Story */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Hi! I'm <span className="font-semibold text-blue-600">Gideon Joseph Ogechukwu</span>, 
                  a self-taught frontend developer who discovered my passion for coding after 
                  graduating with a degree in Geology from Niger Delta University in 2023.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  My journey into web development began with YouTube tutorials, where I fell in love 
                  with React and the art of creating beautiful, functional user interfaces. 
                  What started as curiosity has evolved into a dedicated career path.
                </p>

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  I specialize in building modern, responsive web applications using React, 
                  Tailwind CSS, and integrating with various APIs. My goal is to create 
                  digital experiences that are both visually stunning and highly functional.
                </p>
              </div>

              <div className="flex items-center gap-2 text-blue-600">
                <Youtube className="w-5 h-5" />
                <span className="font-medium text-sm sm:text-base">Self-taught via YouTube</span>
              </div>
            </motion.div>

            {/* Right Column - Images and Details */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Image Section */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative overflow-hidden rounded-xl shadow-lg border border-white/20"
                >
                  <img 
                    src="/images/gideon1.jpg" 
                    alt="Gideon Joseph" 
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative overflow-hidden rounded-xl shadow-lg border border-white/20"
                >
                  <img 
                    src="/images/gideon2.jpg" 
                    alt="Gideon Joseph" 
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </motion.div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 shadow-lg border border-white/20">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Quick Facts</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Niger Delta University</p>
                      <p className="text-xs sm:text-sm text-gray-600">Geology Graduate, 2023</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Nigeria</p>
                      <p className="text-xs sm:text-sm text-gray-600">Available for Remote Work</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Frontend Focus</p>
                      <p className="text-xs sm:text-sm text-gray-600">React & Tailwind CSS</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Career Change</p>
                      <p className="text-xs sm:text-sm text-gray-600">From Geology to Code</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 sm:p-6 shadow-lg border border-white/20">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Current Focus</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm sm:text-base">React & React Native</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm sm:text-base">Tailwind CSS & NativeWind</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm sm:text-base">API Integration & Deployment</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;