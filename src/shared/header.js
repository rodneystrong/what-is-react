import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          This goes at the top of every page. Page title: {this.props.titleProp}
        </h1>
        <p>{this.props.testProp}</p>
      </header>
    );
  }
}
