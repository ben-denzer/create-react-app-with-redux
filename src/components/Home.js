import React from 'react';
import {connect} from 'react-redux';
import {addCounter, decrement, increment, removeCounter} from '../actions/counterActions';
import CounterContainer from './counter/CounterContainer';

const Home = (props) => {
    const counters = props.counter.map((counterVal, index) => {
        return <CounterContainer
            key={index}
            val={counterVal}
            increment={() => props.increment(index)}
            decrement={() => props.decrement(index)}
            removeCounter={() => props.removeCounter(index)}
        />
    });

    return (
        <div id="counter_page">
            <h1>Home</h1>
            {counters}
            <button className="add-counter" onClick={props.addCounter}>Add Counter</button>
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
        addCounter:             () => dispatch(addCounter()),
        decrement:              (index) => dispatch(decrement(index)),
        increment:              (index) => dispatch(increment(index)),
        removeCounter:          (index) => dispatch(removeCounter(index)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);