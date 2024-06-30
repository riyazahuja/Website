import React, { useEffect, useState } from 'react';
import NavBox from './NavBox';
import ImageSwiper from './ImageSwiper';

function ProjectsPage({ darkMode }) {
  const [projectItems, setProjectItems] = useState([]);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const projectPaths = ['Orbisol','Keraunos','SIER']; // Ensure this matches the folder name exactly
        const projectDataPromises = projectPaths.map(async (projectPath) => {
          const response = await fetch(`/projectData/${projectPath}/data.json`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          console.log(response)
          const data = await response.json();
          return {
            ...data,
            image: `/projectData/${projectPath}/images/${data.images[0]}`, // Set correct image path
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
      <NavBox darkMode={darkMode} />
      <h1 className="text-6xl absolute top-4 left-4">Projects</h1>
      <div className="absolute inset-0">
        <ImageSwiper items={projectItems} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default ProjectsPage;
