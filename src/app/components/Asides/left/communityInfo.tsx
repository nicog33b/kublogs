import React from 'react';

const CommunityInfo: React.FC = () => {
  return (
    <div className="bg-white border rounded-md p-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-2 source-font">KUBERA is a community for entrepeneurs.</h2>
      <p className="text-2xl font-bold mb-2"></p>
      <p className="mb-4 ubuntu-light">
      In this place you can get valuable information to your business.
      </p>
      <button className="w-full bg-blue-600 text-white py-2 rounded-md mb-2">
        Create account
      </button>
      <button className="w-full text-blue-600 py-2 rounded-md border border-blue-600">
        Log in
      </button>
    </div>
  );
};

export default CommunityInfo;
