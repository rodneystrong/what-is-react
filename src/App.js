import React, { Component } from 'react';
import { blog } from './blog';
import Blog from './blog';
import TheArray from './render-array';
import Delayed from './delayed';
import Tabs from './fun/tabs';
import Post from './fun/single-post';

//WEDNESDAY ASSIGNMENT!:
//Use the same API but call the 'posts' endpoint and render a single Post component for every post there
//extra credit: get the actual user name to display for each post as well, not just the user ID

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* In the code below, you put the number 4 and 6 in curly braces cause you don't want it to be a string, but a number value. */}
        <Post id={4} />
        <Post id={6} />
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
