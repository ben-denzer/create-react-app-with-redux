import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../constants/actionTypes';

const increment = (index) => {
    return (dispatch, getState) => {
        const {counter} = getState();
        const newCount = counter[index] + 1;

        newCount >= 0 && dispatch({type: INCREMENT_COUNTER, newCount, index});
    }
};

export {
    increment,
};