import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBox from './NavBox';
import parse from 'html-react-parser';

function PostDataPage({ darkMode }) {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const postFolderPath = `/postData/${postId}`;

  useEffect(() => {
    // Fetch post details
    fetch(`${postFolderPath}/data.json`)
      .then((response) => {console.log(response); return response.json()})
      .then((data) => {
        console.log('Fetched post data:', data);
        setPost(data);
      })
      .catch((error) => console.error('Error fetching post data:', error));
  }, [postId,postFolderPath]);

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

  if (!post) {
    return <div>Loading...</div>;
  }



  const links = Object.keys(post.contentLinks).map((k)=> {
    const v = post.contentLinks[k];
    const text = `<a href = ${v}> ${k} </a>`;
    return text
  });

  return (
    <div className={`main-content-area relative ${darkMode ? 'dark-mode' : ''}`}>
      <NavBox darkMode={darkMode} />
      <h1 className="text-6xl absolute top-1 left-4 w-1/3">{post.title}</h1>
      <p className="project-info text-2xl absolute top-20 left-4 w-1/3">{post.content}</p>
      <div className="project-additional-info absolute bottom-4 right-4 w-1/3">
        <div>
          <h3>Links</h3>
          <p>{parse(links.join('</p><p>'))}</p>
        </div>
        <div>
          <h3>Tags</h3>
          {parse('<p>'+post.contentTags.join('</p><p>')+'</p>')}
        </div>
        <div>
          <h3>Additional Info</h3>
          <p>{post.additionalInfo}</p>
        </div>
      </div>
    </div>
  );
}

export default PostDataPage;
