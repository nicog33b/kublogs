'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <Image src="/logo.svg" alt="Kuberalabs Logo" width={300} height={300} className=" h-12 w-auto mr-3" />
        </div>

        {/* Menú centrado */}
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'} justify-center`}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 mr-2">
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
        </div>

        {/* Botón de menú hamburguesa para pantallas pequeñas */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Búsqueda y selector de idioma a la derecha */}
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Buscar" 
              className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <button className="absolute inset-y-0 right-0 px-3 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m2.35-7.65A9 9 0 1112 3a9 9 0 017 12.65z" />
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600">ES</span>
            <svg className="ml-1 w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
