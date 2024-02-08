import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getPlayers (action) {
    try {
        const response = yield axios.get('/api/players')
        console.log('response in players.saga GET:', response);
        yield put({
            type: 'SET_PLAYERS', 
            payload: response.data
        })
    }
    catch (err) {
        console.log('error getting players:', err)
    }
}

function* deletePlayers (action) {
    console.log('action.payload', action.payload)
    try {
        yield axios.delete(`/api/players/${action.payload}`)
        yield put ({ type: 'FETCH_PLAYERS'})
    }
    catch (err) {
        console.log('Error deleting player:', err)
    }
}

function* postPlayers (action) {
    const player = {
        name: action.payload.name
    }
    try {
        yield axios.post('/api/players', player);
    }
    catch (err) {
        console.log('error posting player:', err)
    }
}   


function* playerSaga() {
    yield takeLatest ('FETCH_PLAYERS', getPlayers)
    yield takeLatest ('DELETE_PLAYERS', deletePlayers)
    yield takeLatest ('POST_PLAYERS', postPlayers)
}

export default playerSaga