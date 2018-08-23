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
    let { postProp } = this.props;
    return (
      <div>
        <h2>This is the {postProp.title}</h2>
        <p>This is the {postProp.body}</p>
      </div>
    );
  }
}
