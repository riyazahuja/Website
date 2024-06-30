import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBox from './NavBox';
import ImageSwiper2 from './ImageSwiper2';
import parse from 'html-react-parser';

function ProjectDataPage({ darkMode }) {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const projectFolderPath = `/projectData/${projectId}`;

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

  useEffect(() => {
    const addHoverEffect = () => {
      document.body.classList.add('hovering');
    };

    const removeHoverEffect = () => {
      document.body.classList.remove('hovering');
    };

    const handleClick = () => {
      document.body.classList.remove('hovering');
    };

    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseover', addHoverEffect);
      el.addEventListener('mouseout', removeHoverEffect);
      el.addEventListener('click', handleClick);
    });

    return () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseover', addHoverEffect);
        el.removeEventListener('mouseout', removeHoverEffect);
        el.removeEventListener('click', handleClick);
      });
    };
  }, []);

  if (!project) {
    return <div>Loading...</div>;
  }

  const projectImages = project.images.map((img) => `${projectFolderPath}/images/${img}`);
  console.log('Project images:', projectImages);

  const links = Object.keys(project.contentLinks).map((k)=> {
    const v = project.contentLinks[k];
    const text = `<a href = ${v}> ${k} </a>`;
    return text
  });

  return (
    <div className={`main-content-area relative ${darkMode ? 'dark-mode' : ''}`}>
      <NavBox darkMode={darkMode} />
      <h1 className="text-6xl absolute top-1 left-4 w-1/3">{project.title}</h1>
      <p className="project-info text-2xl absolute top-20 left-4 w-1/3">{project.content}</p>
      <div className="project-images w-1/3 p-4">
        <ImageSwiper2 items={projectImages} />
      </div>
      <div className="project-additional-info absolute bottom-4 right-4 w-1/3">
        <div>
          <h3>Links</h3>
          <p>{parse(links.join('</p><p>'))}</p>
        </div>
        <div>
          <h3>Tags</h3>
          {parse('<p>'+project.contentTags.join('</p><p>')+'</p>')}
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
