/*import React from 'react';
import NavBox from './NavBox';
import ImageSwiper from './ImageSwiper';
import image1 from '../logo512.jpg';

const projectItems = [
  { title: 'Project 1', image: image1, link: '/projects/project1' },
  { title: 'Project 2', image: image1, link: '/projects/project2' },
  { title: 'Project 3', image: image1, link: '/projects/project1' },
  { title: 'Project 4', image: image1, link: '/projects/project1' },
  { title: 'Project 5', image: image1, link: '/projects/project1' },
  { title: 'Project 6', image: image1, link: '/projects/project1' },
  { title: 'Project 7', image: image1, link: '/projects/project1' },
  { title: 'Project 8', image: image1, link: '/projects/project1' },
  { title: 'Project 9', image: image1, link: '/projects/project1' },

  // Add more project items here
];

function ProjectsPage({ darkMode }) {
  return (
    <div className="main-content-area relative">
      {<NavBox darkMode={darkMode}/>}
      <h1 className="text-6xl absolute top-4 left-4">Projects</h1>
      <div className="absolute inset-0">
        <ImageSwiper items={projectItems} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default ProjectsPage;
*/

// ProjectsPage.js
import React, { useEffect, useState } from 'react';
import NavBox from './NavBox';
import ImageSwiper from './ImageSwiper';


function ProjectsPage({ darkMode }) {
  const [projectItems, setProjectItems] = useState([]);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const projectPaths = ['stagira','stagira copy','stagira copy 2','stagira copy 3','stagira copy 4','stagira copy 5','stagira copy 6','stagira copy 7','stagira copy 8']; // Add all project folders here or dynamically fetch them if possible
        const projectDataPromises = projectPaths.map(async (projectPath) => {
          const response = await fetch(`/projects/${projectPath}/data.json`);
          const data = await response.json();
          return {
            ...data,
            image: `/projects/${projectPath}/images/${data.images[0]}`, // Set correct image path
          };
        });

        const projects = await Promise.all(projectDataPromises);
        setProjectItems(projects);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchProjectData();
  }, []);

  return (
    <div className="main-content-area relative">
      {<NavBox darkMode={darkMode} />}
      <h1 className="text-6xl absolute top-4 left-4">Projects</h1>
      <div className="absolute inset-0">
        <ImageSwiper items={projectItems} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default ProjectsPage;
