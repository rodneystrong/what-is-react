import React from 'react';

export default Todo extends React.Component {
  constructor() {
    super();
    this.state = {inputValue: ''};
  }

  render() {
    return(
      <div className="todo-input">
        <input 
          name="addField"
          value={inputValue}
          onChange={e => {
            console.log(e.target.value);
          }}
        />
      </div>
    )
  }
}