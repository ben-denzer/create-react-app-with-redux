import initialState from './initialState';

const reducer = (state = initialState.counter, action) => {
    console.log(action, state);
    switch(action.type) {
        case 'INCREMENT_COUNTER':
            return [...state.slice(0, action.index), action.newCount, ...state.slice(action.index + 1)];
        default:
            return state;
    }
};

export default reducer;