import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>You're at the home page</h1>
        <p>
          You're gonna wanna go to the <a href="/posts">Blog</a> page.
        </p>
      </div>
    );
  }
}
