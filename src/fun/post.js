import React from 'react';

export default class Post extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.setState({ title: 'First post from post.js' });
  }

  render() {
    let { title } = this.state;
    return <div>This is the {title}</div>;
  }
}
