import React from 'react';

let postTitles = ['test', 'yaaay', 'help'];

export default () => (
  <div>
    {postTitles.map(title => (
      <h2>{title}</h2>
    ))}
  </div>
);
