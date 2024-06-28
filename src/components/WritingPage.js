import React from 'react';
import HoverInfo from './HoverInfo';
import NavBox from './NavBox';
const writeInfo = ["Writing!"];

function WritingPage() {
  return (
    <div className="container mx-auto p-4 relative">
        {<NavBox />}
      <h1 className="text-4xl mb-4">Write</h1>
      <p>This is the writings page of my personal website.</p>
    </div>
  );
}

export default WritingPage;
