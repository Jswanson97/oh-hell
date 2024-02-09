import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';


function PostPlayer() {
 
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