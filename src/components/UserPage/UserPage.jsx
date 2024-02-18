import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory()
  const handleClick = () => {
    history.push('/createGame')
  }
  const onClick = () => {
    history.push('/gameHistory')
  }
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      {/* <button onClick={handleClick}>Create Game</button> */}
      <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleClick}>Create Game</Button>
      <Button variant="contained" onClick={onClick}>Game History</Button>
      </Stack>

      {/* <button onClick={onClick}>Game History</button> */}
      {/* <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={onClick}>Game History</Button>
      </Stack> */}

      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
