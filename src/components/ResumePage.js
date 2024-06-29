// ResumePage.js
import React from 'react';
import NavBox from './NavBox';

function ResumePage({darkMode}) {
  return (
    <div className="main-content-area relative">
      {<NavBox darkMode={darkMode}/>}
      <h1 className="text-6xl absolute top-4 left-4">Resume</h1>
      <div className="absolute top-24 left-4 w-1/2">
        <div className="mb-4">Section 1 of Resume</div>
        <div className="mb-4">Section 2 of Resume</div>
        <div className="mb-4">Section 3 of Resume</div>
        {/* Add more sections as needed */}
      </div>
      <div className="absolute bottom-4 right-4">
        <a href="/path-to-resume.pdf" download className="btn">Download PDF</a>
      </div>
    </div>
  );
}

export default ResumePage;
