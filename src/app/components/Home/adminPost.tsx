import React from 'react';
import Image from 'next/image';

const AdminPost = () => {
  return (
    <div className="w-full mr-2 ml-2 mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div>
        <Image className="w-full object-cover" width={600} height={600} src="/adminpost.avif" alt="Trophy" />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">DEV Challenges</div>
        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">The AWS Amplify Fullstack TypeScript Challenge</a>
        <p className="mt-2 text-gray-500">Congrats to the winners of the AWS Amplify Fullstack TypeScript Challenge held from May 15 to May 26. #devchallenge #awschallenge #amplify #fullstack</p>
        <div className="flex items-center mt-4">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">dev.to staff</p>
            <p className="text-gray-600">May 28</p>
          </div>
          <div className="ml-auto flex space-x-2">
            <span>❤️</span>
            <span>👋</span>
            <span>🔥</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPost;
