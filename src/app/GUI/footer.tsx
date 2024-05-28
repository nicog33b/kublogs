'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Logo a la izquierda */}
        <div className="flex items-center mb-6 lg:mb-0 ">
          <Image src="/logo.svg" alt="Kuberalabs Logo" width={48} height={48} className="h-12 w-auto mr-3" />
        </div>


        {/* Iconos de redes sociales */}
        <div className="flex space-x-4">
          <Link href="#" className="text-gray-800 hover:text-gray-600">
            <FaFacebook className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-800 hover:text-gray-600">
            <FaTwitter className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-800 hover:text-gray-600">
            <FaInstagram className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-4">
        &copy; 2024 Kuberalabs. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
