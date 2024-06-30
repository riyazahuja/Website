import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavBox({ darkMode }) {
  useEffect(() => {
    const addHoverEffect = () => {
      document.body.classList.add('hovering');
    };

    const removeHoverEffect = () => {
      document.body.classList.remove('hovering');
    };

    const handleClick = () => {
      document.body.classList.remove('hovering');
    };

    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach((el) => {
      el.addEventListener('mouseover', addHoverEffect);
      el.addEventListener('mouseout', removeHoverEffect);
      el.addEventListener('click', handleClick);
    });

    return () => {
      navLinks.forEach((el) => {
        el.removeEventListener('mouseover', addHoverEffect);
        el.removeEventListener('mouseout', removeHoverEffect);
        el.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div className={`navbar top-4 right-4 ${darkMode ? 'bg-dark text-light border-dark' : 'bg-light text-dark border-light'}`}>
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
