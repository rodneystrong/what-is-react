import React from 'react';

export default class Blog extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log('the response is ', response);
    //gotta jsonify the response
    let postsJson = await response.json();

    console.log('the JSONed data is ', postsJson);

    this.setState({ postsJson });
  }

  render() {
    let { postsJson } = this.state;
    if (!postsJson) return null;

    return (
      <div className="blog-section">
        <h2>Blog titles and descriptions</h2>
        {postsJson.map(postItem => {
          return (
            <div className="blog-snip">
              <h2>{postItem.title}</h2>
              <p>{postItem.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
