// InfoPage.js
import React from 'react';
import NavBox from './NavBox';

function InfoPage({darkMode}) {
  return (
    <div className="main-content-area relative">
      {<NavBox darkMode={darkMode}/>}
      <h1 className="text-6xl absolute top-4 left-4">Riyaz Ahuja</h1>
      <p className="absolute bottom-4 right-4 w-1/3">This is a paragraph text area for info page. You can put your info here.</p>
      <p className="absolute bottom-4 left-4 w-1/3">This is a paragraph text area for links and contact info.</p>
    </div>
  );
}

export default InfoPage;
