import React from 'react';

const CounterContainer = (props) => {
    return (
        <div className="counter-container">
            <h2>{props.val}</h2>
            <div className="change-buttons">
                <button onClick={props.increment}> + </button>
                <button onClick={props.decrement}> - </button>
            </div>
            <button className="remove-counter" onClick={props.removeCounter}>Remove Counter</button>
        </div>
    );
};

export default CounterContainer;