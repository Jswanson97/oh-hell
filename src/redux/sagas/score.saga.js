import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* busted (action) {
    try {
        console.log('action.payload:', action.payload)
        yield axios.patch(`/api/score/${action.payload}`)
    }
    catch (err) {
        console.log('error updating made it/ busted', err)
    }
}

function* deleteScore (action) {
    try {
        yield axios.delete('/api/score/delete')
    }
    catch (err) {
        console.log('error deleting players from score table')
    }
}

function* scoreSaga() {
    yield takeLatest ('TOGGLE_MADE_IT', busted)
    yield takeLatest ('DELETE_ALL_SCORE', deleteScore)
}

export default scoreSaga;