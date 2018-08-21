import React from 'react';

export default class Delayed extends React.Component {
  constructor() {
    super();
    this.state = { text: 'hi girlfriend' };
  }
  render() {
    let { text } = this.state;

    return (
      <div
        onClick={() => {
          if (text === 'you dead man')
            return this.setState({ text: 'hi girlfriend' });
          this.setState({ text: 'you dead man' });
        }}
      >
        hey man, or should i say {text}
      </div>
    );
  }
}
