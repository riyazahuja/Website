import React from 'react';

const RightSidebar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="right-sidebar items-center justify-center h-full flex">
      <button 
        className='transform -rotate-90 origin-center p-2'
        style={{backgroundColor : darkMode ? '#F7F3E3':'#2E242A'}}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '' : ''}
      </button>
    </div>
  );
};

export default RightSidebar;
