import React from 'react';
import { Link } from 'react-router-dom';
import HoverInfo from './HoverInfo';
import NavBox from './NavBox';
const homeInfo = ["Welcome to my personal website.", "Explore my projects.", "Read my writings."];

function HomePage() {
  return (
    <div className="container mx-auto p-4 relative">
      {<NavBox />}
      <h1 className="text-4xl mb-4">Home</h1>
      <p>This is the home page of my personal website.</p>
      {/* <HoverInfo info={homeInfo} direction="none" /> */}
    </div>
  );
}

export default HomePage;
