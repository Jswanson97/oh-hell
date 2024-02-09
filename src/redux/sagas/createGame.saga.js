import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postAllPlayers (action) {
    try {
        yield axios.post('/api/game')
    }
    catch (err) {
        console.log('error posting all players', err)
    }
}

function* gameSaga() {
    yield takeLatest ('POST_ALL_PLAYERS', postAllPlayers)
}

export default gameSaga