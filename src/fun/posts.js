import React from 'react';
import Post from './post';
import { Header } from '../shared/header';

export default class Posts extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    let { id } = this.props;
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

    console.log('this is your fucking response: ', response);

    console.log('ma fuckin status ', response.status);

    let posts = await response.json();

    console.log('the fuckin posts are ', posts);

    this.setState({ posts });
  }

  render() {
    let { posts } = this.state;

    if (!posts) return null;

    console.log('this is my state ', posts);

    console.log('this is my first array item ', posts[0]);

    console.log('this is my title ', posts[0].title);

    return (
      <div>
        <Header />
        {posts.map(postItem => (
          <Post postProp={postItem} />
        ))}
      </div>
    );
  }
}
