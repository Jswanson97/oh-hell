import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PlayerReducer from "../PlayerReducer/PlayerReducer";
import postScoreReducer from "../../redux/reducers/PostScore.reducer";


function Game() {
  const dispatch = useDispatch();
  const player = useSelector((store) => store.player);
  const postScore = useSelector((store) => store.postScoreReducer)
  const history = useHistory();

  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = () => {
    dispatch({ type: "FETCH_PLAYERS" });
    dispatch({ type: "POST_SCORE" });
  };

  // const createReversedArray = (round) => {
  //   const gameArray = Array.from({ length: round }, (_, index) => index + 1);
  //   const reversedArray = gameArray.slice().reverse();
  //   const combinedArray = reversedArray.concat(gameArray);
  //   return combinedArray;
  // };

  const gameTurns = 6;
  const [currentTurn, setCurrentTurn] = useState(gameTurns);


  const nextTurn = () => {
    //add SQL query here to add score + input
    dispatch({ type: 'UPDATE_SCORE' })
    dispatch({ type: 'UPDATE_FALSE' })
    if (currentTurn > gameTurns * -1) {
      setCurrentTurn(currentTurn - 1);
    } else {
      console.log("Game Over!");
      dispatch({ type: 'GET_FINALE_SCORE' });
      history.push('/endOfGame')
      // Redirect to winner screen after last turn
    }
  };

  return (
    <div>
      <header align="center">Round #{currentTurn == 0 ?'1' : Math.abs(currentTurn)}</header>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Players</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">Bid</TableCell>
              <TableCell align="right">Made it</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {postScore.map((player, i) => (

             <PlayerReducer key={i} row={player}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={nextTurn}>Submit</button>
      </div>
    </div>
  );
}

export default Game;