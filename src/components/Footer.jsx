import React from 'react';
import { Heart, Code, Github, Linkedin, Twitter, ArrowUp, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Gideon Joseph
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Frontend Developer specializing in React and modern web technologies. 
              Creating beautiful, functional applications that make a difference.
            </p>
            <div className="flex items-center gap-2 text-gray-600">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>and</span>
              <Code className="w-4 h-4 text-blue-500" />
              <span>in Nigeria</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Get in Touch</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:Gideonjoseph990@gmail.com" 
                  className="text-sm hover:text-blue-600 transition-colors"
                >
                  Gideonjoseph990@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="text-sm">Available for remote work</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a 
                href="https://github.com/Aceboyd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
              >
                <Github className="w-4 h-4 text-gray-600" />
              </a>
              <a 
                href="https://www.linkedin.com/in/gideon-joseph-549855315/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
              </a>
              <a 
                href="https://x.com/Gee_Boyd1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
              >
                <Twitter className="w-4 h-4 text-blue-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-sm">
            © {currentYear} Gideon Joseph Ogechukwu. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-gray-600 text-sm">
              Built with React & Tailwind CSS
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;