import React, { useEffect, useState } from 'react';
import NavBox from './NavBox';
import ImageSwiper from './ImageSwiper';

function WritingPage({ darkMode }) {
  const [postItems, setPostItems] = useState([]);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const postPaths = ['06-30-2024']; // Ensure this matches the folder name exactly
        const postDataPromises = postPaths.map(async (postPath) => {
          const response = await fetch(`/postData/${postPath}/data.json`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          console.log(response)
          const data = await response.json();
          return {
            ...data,
            image: `/postData/${postPath}/images/${data.images[0]}`, // Set correct image path
          };
        });

        const posts = await Promise.all(postDataPromises);
        setPostItems(posts);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchPostData();
  }, []);

  return (
    <div className="main-content-area relative">
      <NavBox darkMode={darkMode} />
      <h1 className="text-6xl absolute top-4 left-4">Posts</h1>
      <div className="absolute inset-0">
        <ImageSwiper items={postItems} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default WritingPage;
