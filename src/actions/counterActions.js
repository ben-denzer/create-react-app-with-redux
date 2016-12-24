import {
    ADD_COUNTER,
    DECREMENT_COUNTER,
    INCREMENT_COUNTER,
    REMOVE_COUNTER,
} from '../constants/actionTypes';

const addCounter = () => {
    return {type: ADD_COUNTER};
};

const decrement = (index) => {
    return (dispatch, getState) => {
        const {counter} = getState();
        const newCount = counter[index] - 1;

        newCount >= 0 && dispatch({type: DECREMENT_COUNTER, newCount, index});
    }
};

const increment = (index) => {
    return (dispatch, getState) => {
        const {counter} = getState();
        const newCount = counter[index] + 1;

        newCount >= 0 && dispatch({type: INCREMENT_COUNTER, newCount, index});
    }
};

const removeCounter = (index) => {
    return {type: REMOVE_COUNTER, index};
};

export {
    increment,
    decrement,
    addCounter,
    removeCounter,
};