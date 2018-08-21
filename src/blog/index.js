import React from 'react';
import Post from './post';

const blog = 'lel im a blooog';
const wtf = 12;

const Blog = () => {
  return (
    <React.Fragment>
      <Post title="1st title" body="yeayyoooo" />
      <Post title="2nd title" body="doooood we craaazy" />
    </React.Fragment>
  );
};

export default Blog;
