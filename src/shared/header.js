import React from 'react';

export class Header extends React.Component {
  render() {
    let { titleProp } = this.props;
    console.log('your prop bitch ', this.props);
    return (
      <header>
        <h1>
          This h1 goes at the top of every page and this is your title prop:{' '}
          {titleProp}
        </h1>
      </header>
    );
  }
}
