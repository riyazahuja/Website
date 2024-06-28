import React from 'react';
import { useLocation } from 'react-router-dom';

const LeftSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getPageName = (path) => {
    switch (path) {
      case '/':
        return 'Home';
      case '/projects':
        return 'Projects';
      case '/resume':
        return 'Resume';
      case '/writing':
        return 'Writing';
      default:
        return path.split('/').filter(Boolean).join(' / ');
    }
  };

  return (
    <div className="left-sidebar bg-gray-800 text-white h-full flex items-center">
      <p className="transform -rotate-90 origin-center whitespace-nowrap text-lg">
        {getPageName(currentPath)}
      </p>
    </div>
  );
};

export default LeftSidebar;
