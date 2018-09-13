import React from 'react';

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
    };
  }

  //gotta create a function that captures the text input
  //then put it into the console
  inputChange = event => {
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput);
  };

  render() {
    return <input name="randomInput" onChange={this.inputChange} />;
  }
}
