import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router'
import Nav from './components/shared/Nav';
import Routes from './components/shared/Routes';

const App = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <hr/>
      <TopLevelRoutes />
    </div>
  </BrowserRouter>
)

render(<App/>, document.getElementById('root'));