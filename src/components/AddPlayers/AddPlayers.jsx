import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function PostPlayer() {
 
    const history = useHistory()
    const playerStore = useSelector((store) => store.player);
    const gameStore = useSelector((store) => store.createGame)
    const [player, setPlayer] = useState('');
    const dispatch = useDispatch()

  const handleSubmit = (event) => {
    const objectExporting = {id: playerStore.id, name: player}

    dispatch({type:'POST_PLAYERS', payload: objectExporting})
    dispatch({type:'FETCH_PLAYERS'})
    setPlayer(event.target.value)
    setPlayer('');
  }

  const submitPlayers = (event) => {
    dispatch({type:'POST_ALL_PLAYERS'})
    history.push('/game')
  }

  return (
    <div>
        <h2>Add Players</h2>
        <div>
            <input
            value={player}
            onChange={(event) => setPlayer(event.target.value)}
            placeholder='Add a player'
            ></input>
            <button onClick={handleSubmit}>Add player</button>
        </div>
        <button onClick={submitPlayers}>Submit</button>
    </div>
  );
}

export default PostPlayer;