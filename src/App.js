import React, { Component } from 'react';
import Home from './pages';

//WEDNESDAY ASSIGNMENT!:
//Use the same API but call the 'posts' endpoint and render a single Post component for every post there
//extra credit: get the actual user name to display for each post as well, not just the user ID

//MONDAY ASSIGNMENT!:
//Make several components, use stateless and stateful(with state) components
//This will help you get comfortable with understanding props

class App extends Component {
  render() {
    console.log(window.location);
    let theUrl = window.location.pathname;
    console.log(theUrl);
    return <div className="App" />;
  }
}

export default App;
