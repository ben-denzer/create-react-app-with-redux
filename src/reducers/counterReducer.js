import initialState from './initialState';

const reducer = (state = initialState.counter, action) => {
    switch(action.type) {
        case 'ADD_COUNTER':
            return [...state, 0];
        case 'DECREMENT_COUNTER':
            return [...state.slice(0, action.index), action.newCount, ...state.slice(action.index + 1)];
        case 'INCREMENT_COUNTER':
            return [...state.slice(0, action.index), action.newCount, ...state.slice(action.index + 1)];
        case 'REMOVE_COUNTER':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        default:
            return state;
    }
};

export default reducer;