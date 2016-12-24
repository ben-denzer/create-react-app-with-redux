import React from 'react';
import Nav from './shared/Nav';
import TopLevelRoutes from './shared/TopLevelRoutes';

const Main = (props) => {
    return (
        <div>
            <Nav />
            <hr />
            <TopLevelRoutes />
        </div>
    );
};

export default Main;