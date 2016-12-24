import React from 'react';
import {connect} from 'react-redux';

const Home = (props) => {
    console.log(props.counter);
    return (
        <div>
            <h1>Home</h1>
            <h2>{props.counter}</h2>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
};

export default connect(mapStateToProps)(Home);