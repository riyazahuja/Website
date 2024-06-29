import React from 'react';
import NavBox from './NavBox';
import ImageSwiper from './ImageSwiper';
import image1 from '../logo512.jpg';

const writingItems = [
  { title: 'Post 1', image: image1, link: '/writing/post1' },
  { title: 'Post 2', image: image1, link: '/writing/post2' },
  { title: 'Post 3', image: image1, link: '/writing/post1' },
  { title: 'Post 4', image: image1, link: '/writing/post1' },
  { title: 'Post 5', image: image1, link: '/writing/post1' },
  { title: 'Post 6', image: image1, link: '/writing/post1' },
  { title: 'Post 7', image: image1, link: '/writing/post1' },
  // Add more project items here
];

function WritingPage({ darkMode }) {
  return (
    <div className="main-content-area relative">
      {<NavBox darkMode={darkMode}/>}
      <h1 className="text-6xl absolute top-4 left-4">Writings</h1>
      <div className="absolute inset-0">
        <ImageSwiper items={writingItems} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default WritingPage;