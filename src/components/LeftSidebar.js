import React from 'react';
import { useLocation } from 'react-router-dom';

const LeftSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getPageName = (path) => {
    switch (path) {
      case '/':
        return 'HOME';
      case '/projects':
        return 'PROJECTS';
      case '/resume':
        return 'RESUME';
      case '/writing':
        return 'WRITING';
      case '/info':
        return 'INFO';
      default:
        const raw = path.split('/').filter(Boolean).join(' / ')
        return raw.split(" ").map((word) => { 
          return word.toUpperCase(); 
      }).join(" ");
    }
  };

  return (
    <div className="left-sidebar h-full flex items-center justify-center">
      <p className="transform -rotate-90 origin-center whitespace-nowrap text-lg">
        {getPageName(currentPath)}
      </p>
    </div>
  );
};

export default LeftSidebar;
