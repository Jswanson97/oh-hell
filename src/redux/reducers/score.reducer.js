const scoreReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SCORE':
            return action.payload;
            default:
                return state;
    }
}

export default scoreReducer;