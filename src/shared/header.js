import React from 'react';

const Header = ({ titleProp, testProp }) => {
  return (
    <header>
      <h1>This goes at the top of every page. Page title: {titleProp}</h1>
      <p>{testProp}</p>
    </header>
  );
};

export default Header;
