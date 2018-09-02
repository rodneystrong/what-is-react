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
  }

  render() {
    return <h2>Blog titles and descriptions</h2>;
  }
}
