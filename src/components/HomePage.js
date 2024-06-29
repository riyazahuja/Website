// HomePage.js
import React from 'react';
import NavBox from './NavBox';

function HomePage({darkMode}) {
  return (
    <div className="main-content-area relative">
      {<NavBox darkMode={darkMode}/>}
      <h1 className="text-6xl absolute top-1 left-4">Riyaz Ahuja</h1>
      <h2 className="text-2xl absolute top-16 left-4">Your Tagline Here</h2>
      <p className="absolute bottom-4 right-4 w-1/3">This is a paragraph text area for the home page. You can put your info here.</p>
    </div>
  );
}

export default HomePage;
