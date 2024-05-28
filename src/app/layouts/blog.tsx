// BlogLayout.tsx
import React from 'react';
import CommunityInfo from '../components/Asides/left/communityInfo';

const BlogLayout: React.FC = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Columna Izquierda */}
      <aside className="w-[27rem] bg-gray-50 p-4 mt-[3rem]">
        <CommunityInfo />
      </aside>
      
      {/* Columna Central */}
      <main className="w-3/4 bg-gray-50 p-4 mt-3">
        {children}
      </main>
      
      {/* Columna Derecha */}
      <aside className="w-[33rem] bg-gray-50 p-4 mt-[3rem]">
        <p>Contenido de la columna derecha</p>
      </aside>
    </div>
  );
};

export default BlogLayout;
