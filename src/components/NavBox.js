import React from 'react';
import { Link } from 'react-router-dom';


function NavBox() {
  return (
      <div className="absolute top-4 left-4 p-4 bg-gray-800 text-white">
        <nav className="flex flex-col">
          <Link to="/" className="mb-2">Home</Link>
          <Link to="/projects" className="mb-2">Projects</Link>
          <Link to="/resume" className="mb-2">Resume</Link>
          <Link to="/writing" className="mb-2">Writing</Link>
        </nav>
      </div>
  );
}

export default NavBox;
