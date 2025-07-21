import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Rocket, Star } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-16 relative min-h-screen overflow-hidden px-4 sm:px-6">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-50"
          onError={(e) => {
            e.target.style.display = 'none';
            const fallbackDiv = e.target.parentElement.querySelector('.fallback-bg');
            if (fallbackDiv) fallbackDiv.style.display = 'block';
          }}
        >
          <source src="/video/background.mp4" type="video/mp4" />
          <source src="/video/background.webm" type="video/webm" />
          <source src="https://videos.pexels.com/video-files/855561/855561-hd_1920_1080_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/855564/855564-hd_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Fallback background image */}
        <div
          className="fallback-bg absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            display: 'none',
          }}
        ></div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/80 opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-50"></div>
      </div>

      {/* Three.js Background */}
      <ThreeBackground style={{ zIndex: -10 }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <div className="flex items-center space-x-2 text-blue-400 animate-fade-in">
              <Star className="h-5 w-5 fill-blue-400" />
              <span className="font-medium text-sm sm:text-base">Available for Frontend Projects</span>
            </div>

            <div className="space-y-4 animate-slide-up">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight drop-shadow-2xl">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Gideon Joseph
                </span>
              </h1>
              <div className="w-24 h-1 bg-blue-400 animate-expand"></div>
            </div>

            <p className="text-base sm:text-lg lg:text-2xl text-gray-200 leading-relaxed max-w-lg drop-shadow-lg animate-fade-in-delay">
              Frontend Developer & <span className="text-blue-400 font-bold bg-blue-900/50 px-2 py-1 rounded-lg">React Specialist</span>
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-lg drop-shadow-lg animate-fade-in-delay-2">
              Self-taught developer from Niger Delta University, creating beautiful, responsive web applications with React, Tailwind CSS, and modern APIs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-2xl"
              >
                <span>View My Work</span>
                <ArrowDown className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-400 text-blue-400 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/25 transform hover:scale-105"
              >
                Get In Touch
              </motion.button>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-white/25 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border-2 border-white/40 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10 rounded-3xl"></div>
              <div className="relative z-10 flex items-center space-x-4">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 sm:p-4 rounded-2xl shadow-lg">
                  <Code className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-2xl">React Specialist</h3>
                  <p className="text-gray-100 text-sm sm:text-base font-medium">Building Modern Web Apps</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { number: '5+', label: 'Projects Deployed', color: 'from-blue-400 to-blue-600' },
                { number: 'React', label: 'Specialist', color: 'from-purple-400 to-purple-600' },
                { number: '2023', label: 'Graduate', color: 'from-pink-400 to-pink-600' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/30 backdrop-blur-xl p-4 sm:p-6 rounded-2xl text-center border-2 border-white/50 shadow-xl transform hover:scale-110 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent drop-shadow-2xl`}>
                      {stat.number}
                    </div>
                    <div className="text-white text-sm font-bold mt-2">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Card */}
            <div className="bg-gradient-to-r from-blue-900/90 to-blue-600/90 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border-2 border-blue-400/60 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent rounded-2xl"></div>
              <div className="relative z-10">
                <h4 className="text-blue-400 font-bold text-base sm:text-lg mb-2">🚀 Fast Development</h4>
                <p className="text-white text-sm font-medium">Delivering high-quality code on time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes expand {
          from { width: 0; }
          to { width: 6rem; }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-delay { animation: fade-in 1s ease-out 0.3s both; }
        .animate-fade-in-delay-2 { animation: fade-in 1s ease-out 0.6s both; }
        .animate-fade-in-delay-3 { animation: fade-in 1s ease-out 0.9s both; }
        .animate-slide-up { animation: slide-up 1s ease-out 0.2s both; }
        .animate-slide-in-right { animation: slide-in-right 1s ease-out 0.5s both; }
        .animate-expand { animation: expand 1s ease-out 0.8s both; }
      `}</style>
    </section>
  );
};

export default Hero;
