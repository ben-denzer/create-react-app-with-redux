import initialState from './initialState';

const reducer = (state = initialState.counter, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default reducer;