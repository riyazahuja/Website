// NavBox.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBox({ darkMode }) {
  return (
    <div className={`navbar fixed top-4 right-4 p-4 ${darkMode ? 'bg-dark text-light border-dark' : 'bg-light text-dark border-light'}`}>
      <nav className="flex flex-col">
        <Link to="/" className="mb-2">Home</Link>
        <Link to="/info" className="mb-2">Info</Link>
        <Link to="/projects" className="mb-2">Projects</Link>
        <Link to="/writing" className="mb-2">Writing</Link>
        <Link to="/resume" className="mb-2">Resume</Link>
      </nav>
    </div>
  );
}

export default NavBox;
