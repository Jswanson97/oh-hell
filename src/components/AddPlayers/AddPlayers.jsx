import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


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
            <Stack spacing={2} direction="row">
            <Button padding="5px" variant="contained" onClick={handleSubmit}>Add player</Button>
            </Stack>
        </div>
        <br></br>
        <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={submitPlayers}>Start Game</Button>
        </Stack>
    </div>
  );
}

export default PostPlayer;


