import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Game() {

    const dispatch = useDispatch();
    const player = useSelector((store) => store.player);

    useEffect(() => {
        getPlayers()
    }, []);

    const getPlayers = () => {
        dispatch({ type: "FETCH_PLAYERS" });
    };

    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Players</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="center">Bid</TableCell>
            <TableCell align="right">Made it</TableCell>
            <TableCell align="right">Busted</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {player.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.score}</TableCell>
              <TableCell align="right"><input/></TableCell>
              <TableCell align="right"><button>Made it</button></TableCell>
              <TableCell align="right"><button>Busted</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default Game;