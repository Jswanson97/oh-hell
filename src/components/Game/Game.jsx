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


function Game() {
  const dispatch = useDispatch();
  const player = useSelector((store) => store.player);
  const history = useHistory();

  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = () => {
    dispatch({ type: "FETCH_PLAYERS" });
  };

  const createReversedArray = (round) => {
    const gameArray = Array.from({ length: round }, (_, index) => index + 1);
    const reversedArray = gameArray.slice().reverse();
    const combinedArray = reversedArray.concat(gameArray);
    return combinedArray;
  };

  const [gameTurns, setGameTurns] = useState([]);
  const [currentTurn, setCurrentTurn] = useState(0);

  useEffect(() => {
    const round = 6; // replace this whatever is in the input field
    const turns = createReversedArray(round);
    setGameTurns(turns);
  }, []);

  const displayTurn = (turnIndex) => {
    console.log("Current turn:", gameTurns[turnIndex]);
  };

  const nextTurn = () => {
    if (currentTurn < gameTurns.length) {
      displayTurn(currentTurn);
      setCurrentTurn(currentTurn + 1);
    } else {
      console.log("Game Over!");
      // Redirect to winner screen after last turn
    }
  };

  return (
    <div>
      <header align="center">Round #{gameTurns[currentTurn]}</header>
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
            {player.map((player, i) => (

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