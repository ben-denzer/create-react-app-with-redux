import React from 'react';
import { Match, Miss } from 'react-router';
import Home from '../Home';
import About from '../About';
import Topics from '../Topics.js';
import NoMatch from './NoMatch';

const Routes = (props) => {
    return (
        <div>
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/about" component={About} />
            <Match pattern="/topics" component={Topics} />
            <Miss component={NoMatch} />
        </div>
    );
};

export default Routes;