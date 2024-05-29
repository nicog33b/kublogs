'use client';
import React, { useState } from 'react';

const EntrepreneursPosts = () => {
  const [posts, setPosts] = useState([
    { title: 'What was your win this week?', comments: 54 },
    { title: 'Meme Monday', comments: 43 },
    { title: 'Talk : How often do you document your code ?', comments: 23 },
    { title: 'Sloan\'s Inbox: Any advice for avoiding burnout?', comments: 8 },
    { title: 'What is the Best way to Learn to Think Like a Programmer?', comments: 5 },
  ]);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 source-font"><span className='text-blue-600'>#</span>Emprendimiento</h2>
        <p className="text-sm text-gray-600 ubuntu-light">Discussion threads targeting the whole community</p>
      </div>
      <div>
        {posts.map((post, index) => (
          <div key={index} className="p-4 border-t border-gray-200">
            <a href="#" className="block text-[#242460] hover:text-blue-500 hover:underline source-font">{post.title}</a>
            <p className="text-sm text-gray-500 ubuntu-light">{post.comments} comments</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntrepreneursPosts;
