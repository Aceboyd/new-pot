import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Twitter, Github, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-white/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Gideon Joseph
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('about')} 
              className="hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
            >
              About
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('projects')} 
              className="hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
            >
              Projects
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('skills')} 
              className="hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
            >
              Skills
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('contact')} 
              className="hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
            >
              Contact
            </motion.button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://x.com/Gee_Boyd1" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com/Aceboyd" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://www.linkedin.com/in/gideon-joseph-549855315/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/20 mx-4"
          >
            <nav className="flex flex-col space-y-4 px-6">
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-blue-600 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-blue-600 transition-colors font-medium">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-left hover:text-blue-600 transition-colors font-medium">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-blue-600 transition-colors font-medium">Contact</button>
              <div className="flex space-x-4 pt-2">
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="https://x.com/Gee_Boyd1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/Aceboyd" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="https://www.linkedin.com/in/gideon-joseph-549855315/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;