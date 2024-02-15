const postScoreReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_POST_SCORE': 
        return action.payload
        default : 
        return state
    }
}

export default postScoreReducer