import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Match, Miss} from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Topics from './components/Topics';
import NoMatch from './components/NoMatch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
            <BrowserRouter>
              <div>
                <ul>
                  {/* 3. Link to some paths with `Link` */}
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/topics">Topics</Link></li>
                </ul>

                <hr/>

                {/* 4. Render some `<Match/>` components.
                      When the current location matches the `pattern`
                      then the `component` will render.
                */}
                <Match exactly pattern="/" component={Home} />
                <Match pattern="/about" component={About} />
                <Match pattern="/topics" component={Topics} />

                {/* If none of those match, then a sibling `Miss` will render. */}
                <Miss component={NoMatch}/>
              </div>
            </BrowserRouter>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
