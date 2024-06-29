import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBox from './NavBox';
import ImageSwiper2 from './ImageSwiper2';

function ProjectDataPage({ darkMode }) {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const projectFolderPath = `/projects/${projectId}`;

  useEffect(() => {
    // Fetch project details
    fetch(`${projectFolderPath}/data.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched project data:', data);
        setProject(data);
      })
      .catch((error) => console.error('Error fetching project data:', error));
  }, [projectId]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const projectImages = project.images.map((img) => `${projectFolderPath}/images/${img}`);
  console.log('Project images:', projectImages);

  return (
    <div className={`main-content-area relative ${darkMode ? 'dark-mode' : ''}`}>
      {<NavBox darkMode={darkMode}/>}
      <h1 className="text-6xl absolute top-1 left-4 w-1/3">{project.title}</h1>
      <p className="project-info text-2xl absolute top-20 left-4 w-1/3">{project.content}</p>
      <div className="project-images w-1/3 p-4">
          <ImageSwiper2 items={projectImages} />
      </div>
      <div className="project-additional-info absolute bottom-4 right-4 w-1/3">
          <div>
            <h3>Links</h3>
            <p>{project.contentLinks}</p>
          </div>
          <div>
            <h3>Tags</h3>
            <p>{project.contentTags}</p>
          </div>
          <div>
            <h3>Additional Info</h3>
            <p>{project.additionalInfo}</p>
          </div>
        </div>
      </div>
  );
}

export default ProjectDataPage;
