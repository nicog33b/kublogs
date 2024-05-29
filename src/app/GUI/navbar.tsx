'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaSearch } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);

        
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50 top-0 ">
      <div className="container mx-auto flex justify-between items-center p-2">
        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <Link href='/'>
          <Image src="/logo.svg" alt="Kuberalabs Logo" width={48} height={48} className="h-12 w-auto mr-3 hover:scale-105 cursor-pointer" />
          </Link>
        </div>

        {/* Botón de menú hamburguesa y búsqueda para pantallas pequeñas */}
        <div className="flex items-center lg:hidden">
          <button className="mr-4 text-gray-800">
            <FaSearch />
          </button>
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <FaBars className="h-6 w-6" />
          </button>
        </div>

        {/* Menú centrado para pantallas grandes */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4 source-font">
          <Link href="#" className="text-gray-800 hover:text-gray-600">
            Negocios
          </Link>
          <Link href="#" className="text-gray-800 hover:text-gray-600">
            Tecnología
          </Link>
          <Link href="#" className="text-gray-800 hover:text-gray-600">
            Producto
          </Link>
          <Link href="#" className="text-gray-800 hover:text-gray-600">
            Historias de Clientes
          </Link>
          <Link href="#" className="text-gray-800 hover:text-gray-600">
            Institucional
          </Link>
        </div>

        {/* Búsqueda para pantallas grandes */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Buscar" 
              className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <button className="absolute inset-y-0 right-0 px-3 text-gray-500">
              <FaSearch className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center bg-white border-t border-gray-200">
          <li className="w-full text-center py-2">
            <Link href="#" className="text-gray-800 hover:text-gray-600 block">Negocios</Link>
          </li>
          <li className="w-full text-center py-2">
            <Link href="#" className="text-gray-800 hover:text-gray-600 block">Tecnología</Link>
          </li>
          <li className="w-full text-center py-2">
            <Link href="#" className="text-gray-800 hover:text-gray-600 block">Producto</Link>
          </li>
          <li className="w-full text-center py-2">
            <Link href="#" className="text-gray-800 hover:text-gray-600 block">Historias de Clientes</Link>
          </li>
          <li className="w-full text-center py-2">
            <Link href="#" className="text-gray-800 hover:text-gray-600 block">Institucional</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
