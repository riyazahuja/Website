import React from 'react';
import { useParams } from 'react-router-dom';
import NavBox from './NavBox';

const posts = {
  'post1': {
    title: 'Post 1',
    content: 'Details about post 1.'
  },
  'post2': {
    title: 'Post 2',
    content: 'Details about post 2.'
  },
  // Add more posts here
};

function PostPage({darkMode}) {
  const { postId } = useParams();
  const post = posts[postId] || { title: 'Post not found', content: 'No details available.' };

  return (
    <div className="container mx-auto p-4 relative">
      {<NavBox darkMode={darkMode}/>}
      <h1 className="text-4xl mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostPage;
