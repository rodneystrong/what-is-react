import React from 'react';

export default class Post extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    let { id } = this.props;
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

    console.log('this is your fucking response: ', response);

    console.log('ma fuckin status ', response.status);

    let json = await response.json();

    console.log('the fuckin json is ', json.title);

    this.setState(json);
  }

  render() {
    let { title, body } = this.state;

    console.log('this is my state ', this.state);

    console.log('this is my first array item ', this.state[0]);

    console.log('this is my title ', title);

    return (
      <div>
        <h1>This is the {title}</h1>
        <p>This is the {body}</p>
      </div>
    );
  }
}
