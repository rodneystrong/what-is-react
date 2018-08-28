import React, { Component } from 'react';
import { blog } from './blog';
import Blog from './blog';
import TheArray from './render-array';
import Delayed from './delayed';
import { Header } from './shared/header';
import Tabs from './fun/tabs';
import Post from './fun/post';
import Home from './pages/home';
import Posts from './fun/posts';
import { Footer } from './shared/footer';
import Route from './shared/route';
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
        <Header titleProp={theUrl === '/' ? 'Home' : theUrl} />
        <Route path="/" renderedComponent={<Home />} />
        <Route path="/posts" renderedComponent={<Posts />} />
        <Route path="/about" />
        {/*{isHome ? <Home /> : <Posts />}*/}
        {/* {switch (theUrl) {
          default: 
              <Home />;
              break;
          case 'posts':
              <Posts />;
              break; 
          case 'about':
              <About />;
          }
        } */}

        {/* In the code below, you put the number 4 and 6 in curly braces cause you don't want it to be a string, but a number value. */}

        {/* <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Blog />

        <TheArray />

        <Delayed /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
