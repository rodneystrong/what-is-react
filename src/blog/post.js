import React from 'react';

const Post = ({ title, body }) => {
  return (
    //React Fragment makes it so you don't gotta wrap everything in a div.
    //cause remember, you can't have sibling HTML elements in react.
    <React.Fragment>
      <h2>{title}</h2>
      <p>{body}</p>
    </React.Fragment>
  );
};

export default Post;
