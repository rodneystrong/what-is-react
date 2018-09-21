import React from 'react';

export default class Todo extends React.Component {
  constructor() {
    super();
    this.state = { inputValue: '' };
  }

  render() {
    let { inputValue } = this.state;
    return (
      <div className="todo-input">
        <input
          name="addField"
          value={inputValue}
          onChange={e => {
            console.log(e.target.value);
            this.setState({ inputValue: e.target.value });
          }}
        />
      </div>
    );
  }
}
