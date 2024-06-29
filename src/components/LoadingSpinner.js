import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-0">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
