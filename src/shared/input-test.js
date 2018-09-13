import React from 'react';

export default class Inputtest extends React.Component {
  constructor() {
    super();
    this.state = { searchInput: '' };
  }
  render() {
    let { searchInput } = this.state;
    return (
      <div className="second-input">
        <input
          name="searchChange"
          value={searchInput}
          onChange={e => {
            console.log(e.target.value);
            this.setState({ searchInput: e.target.value });
          }}
        />
        <div
          className="button"
          onClick={() => this.setState({ searchInput: '' })}
        >
          click me yea
        </div>
      </div>
    );
  }
}
