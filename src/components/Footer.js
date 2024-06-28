import React from 'react';
import HoverInfo from './HoverInfo';

function Footer({ hoverInfo }) {
  return (
    <footer className="bg-gray-900 text-white p-4 relative">
      <HoverInfo info={hoverInfo} direction="bottom" />
    </footer>
  );
}

export default Footer;
