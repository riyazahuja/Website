import React from 'react';

const RightSidebar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="right-sidebar h-full flex items-center justify-center">
      <button 
        className="transform -rotate-90 origin-center p-2 bg-gray-900 hover:bg-gray-800"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '' : ''}
      </button>
    </div>
  );
};

export default RightSidebar;
