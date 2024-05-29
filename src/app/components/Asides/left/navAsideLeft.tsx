import React from 'react';
import { FaHome, FaTags, FaBullhorn, FaInfoCircle, FaEnvelope, FaBook } from 'react-icons/fa';
import Link from 'next/link';

const NavAsideLeft: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-[#242424] source-font">
      <nav className="flex flex-col p-4 space-y-4">
        <Link href="/" className="flex items-center space-x-2 p-2 hover:bg-blue-100 rounded-md">
          <FaHome className="text-xl" />
          <span>Home</span>
        </Link>
        <Link href="/tags" className="flex items-center space-x-2 p-2 hover:bg-blue-100 rounded-md">
          <FaTags className="text-xl" />
          <span>Tags</span>
        </Link>
        <Link href="/advertise" className="flex items-center space-x-2 p-2 hover:bg-blue-100 rounded-md">
          <FaBullhorn className="text-xl" />
          <span>Advertise on Kubera</span>
        </Link>
        <Link href="/about" className="flex items-center space-x-2 p-2 hover:bg-blue-100 rounded-md">
          <FaInfoCircle className="text-xl" />
          <span>About</span>
        </Link>
        <Link href="/contact" className="flex items-center space-x-2 p-2 hover:bg-blue-100 rounded-md">
          <FaEnvelope className="text-xl" />
          <span>Contact</span>
        </Link>
        <Link href="/guides" className="flex items-center space-x-2 p-2 hover:bg-blue-100 rounded-md">
          <FaBook className="text-xl" />
          <span>Guides</span>
        </Link>
      </nav>
    </div>
  );
}

export default NavAsideLeft;
