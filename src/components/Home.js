import React from 'react';
import {connect} from 'react-redux';
import {increment} from '../actions/counterActions';

const Home = (props) => {
    return (
        <div>
            <h1>Home</h1>
            <h2>{props.counter}</h2>
            <button onClick={() => props.increment(0)}> + </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (index) => dispatch(increment(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);