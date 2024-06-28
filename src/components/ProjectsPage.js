import React from 'react';
import HoverInfo from './HoverInfo';
import NavBox from './NavBox';
const projInfo = ["Projects!"];

function ProjectsPage() {
  return (
    <div className="container mx-auto p-4 relative">
        {<NavBox />}
      <h1 className="text-4xl mb-4">Home</h1>
      <p>This is the projects page of my personal website.</p>
    </div>
  );
}

export default ProjectsPage;
