import React from 'react';
import HoverInfo from './HoverInfo';

/*
Light Mode:

Text: 2E242A
Background: F7F3E3
Border: 293D38


Dark Mode:

Text: F7F3E3
Background: 2E242A
Border: 293D38

*/

function Header({ hoverInfo }) {
  return (
    <header className="headfoot p-4 relative">
      <HoverInfo info={hoverInfo} direction="top" />
    </header>
  );
}

export default Header;
