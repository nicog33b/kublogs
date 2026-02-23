'use client'
import React, { useState } from 'react';

const FilterTabs = () => {
  const [selectedTab, setSelectedTab] = useState('Relevant');
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setShowAdditionalOptions(tab === 'Top');
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-4">
        <button
          className={`font-medium ${selectedTab === 'Relevant' ? 'text-black' : 'text-gray-500'}`}
          onClick={() => handleTabClick('Relevant')}
        >
          Relevant
        </button>
        <button
          className={`font-medium ${selectedTab === 'Latest' ? 'text-black' : 'text-gray-500'}`}
          onClick={() => handleTabClick('Latest')}
        >
          Latest
        </button>
        <button
          className={`font-medium ${selectedTab === 'Top' ? 'text-blue-500' : 'text-gray-500'}`}
          onClick={() => handleTabClick('Top')}
        >
          Top
        </button>
      </div>
      {showAdditionalOptions && (
        <div className="flex items-center space-x-4 ml-auto">
          <button className="text-gray-900">Week</button>
          <button className="text-gray-500">Month</button>
          <button className="text-gray-500">Year</button>
          <button className="text-gray-500">Infinity</button>
        </div>
      )}
    </div>
  );
};

export default FilterTabs;
