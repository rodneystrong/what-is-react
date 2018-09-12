import React from 'react';

export default class Input extends React.Component {
  constructor() {
    super();
  }

  //gotta create a function that captures the text input
  //then put it into the console

  render() {
    return <input onChange={console.log(this.value)} />;
  }
}
