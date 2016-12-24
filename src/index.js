import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router'
import Nav from './components/shared/Nav';
import Routes from './components/shared/Routes';

const App = () => (
  // 2. render a `Router`, it will listen to the url changes
  //    and make the location available to other components
  //    automatically

  <BrowserRouter>
    <div>
      <Nav />
      <hr/>
      <Routes />
    </div>
  </BrowserRouter>
)

render(<App/>, document.querySelector('#root'));