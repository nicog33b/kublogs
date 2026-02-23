import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaYoutube, FaGithub } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
  return (
    <div className="w-full flex space-x-4 p-2 bg-white border border-gray-200 rounded-lg">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
        <FaLinkedin className="text-4xl p-1" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
        <FaInstagram className="text-4xl p-1" />
      </a>
      <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
        <FaWhatsapp className="text-4xl p-1" />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
        <FaYoutube className="text-4xl p-1" />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
        <FaGithub className="text-4xl" />
      </a>
    </div>
  );
}

export default SocialIcons;
