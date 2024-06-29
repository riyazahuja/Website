import React from 'react';
import HoverInfo from './HoverInfo';


function Footer({ hoverInfo }) {
  return (
    <footer className="headfoot p-4 relative">
      <HoverInfo info={hoverInfo} direction="bottom" />
    </footer>
  );
}


export default Footer;
