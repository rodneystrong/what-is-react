import React, { Component } from 'react';
import { blog } from './blog';
import Blog from './blog';
import TheArray from './render-array';
import Delayed from './delayed';
import Tabs from './fun/tabs';
import Post from './fun/post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Post description="some stuff for zach" />
        {/* <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Blog />

        <TheArray />

        <Delayed /> */}
      </div>
    );
  }
}

export default App;
