const createGameReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GAME':
            return action.payload;
            default:
                return state;
    }
}

export default createGameReducer;