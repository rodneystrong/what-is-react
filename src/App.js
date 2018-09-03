import React, { Component } from 'react';
import Header from './shared/header';
import Footer from './shared/footer';
import Home from './pages/home';
import Blog from './pages/blog';

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
    return (
      <div className="App">
        <Header testProp="test prop alex" />
        <Home />
        <Blog />
        <Footer />
      </div>
    );
  }
}

export default App;
