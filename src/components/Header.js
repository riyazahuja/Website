import React from 'react';
import HoverInfo from './HoverInfo';

function Header({ hoverInfo }) {
  return (
    <header className="bg-gray-900 text-white p-4 relative">
      <HoverInfo info={hoverInfo} direction="top" />
    </header>
  );
}

export default Header;
