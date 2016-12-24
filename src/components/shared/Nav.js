import React from 'react';
import {Link} from 'react-router';

const Nav = (props) => {
    return (
        <ul>
            {/* 3. Link to some paths with `Link` */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
        </ul>
    );
};

export default Nav;