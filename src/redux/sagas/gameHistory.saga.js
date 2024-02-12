import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getGameHistory (action) {
    try {
        const response = yield axios.get('/api/gameHistory')
        yield put({
            type: 'GET_HISTORY',
            payload: response.data
        })
    }
    catch (err) {
        console.log('error getting game history', err)
    }
}

function* gameHistorySaga() {
    yield takeLatest ('FETCH_GAME_HISTORY', getGameHistory)
}

export default gameHistorySaga