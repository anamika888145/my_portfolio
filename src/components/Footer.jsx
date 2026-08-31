import React from 'react';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-4">
        
      
        <div className="flex space-x-6 text-2xl">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-300 transition">
            <FaTwitter />
          </a>
        </div>

    
        <div className="w-full max-w-xs border-t border-gray-700"></div>

        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Designed & Built by Me.
        </p>
      </div>
    </footer>
  );
};

export default Footer;