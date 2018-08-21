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
    console.log('show me ', this);
    let { title } = this.state;
    console.log('fuck your couch and ', this);
    let { description } = this.props;
    return (
      <div>
        <h1>This is the {title}</h1>
        <p>This is the {description}</p>
      </div>
    );
  }
}
