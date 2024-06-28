import React, { useState, useEffect } from 'react';

const RightSidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="right-sidebar bg-gray-800 text-white h-full flex items-center justify-center">
      <button 
        className="transform -rotate-90 origin-center p-2 bg-gray-700 hover:bg-gray-600"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '' : ''}
      </button>
    </div>
  );
};

export default RightSidebar;
