import React from 'react';

const CounterContainer = (props) => {
    console.log(`CounterContainer val ${props.val}`)
    return (
        <div className="counter-container">
            <h2>{props.val}</h2>
            <div className="change-buttons">
                <button onClick={props.increment}> + </button>
                <button onClick={props.decrement}> - </button>
            </div>
            <button onClick={props.removeCounter}>Remove Counter</button>
        </div>
    );
};

export default CounterContainer;