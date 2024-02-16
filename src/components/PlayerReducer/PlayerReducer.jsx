import React, { useState, useLayoutEffect } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

function PlayerReducer({ row }) {
  const dispatch = useDispatch()
  const [madeIt, setMadeIt] = useState(true);
  const [busted, setBusted] = useState(true);
  const [input, setInput] = useState("");
  const handleMadeIt = () => {
    setMadeIt(!madeIt);
    dispatch({type: 'TOGGLE_MADE_IT', payload: row.id}) 
  };

  const handleBusted = () => {
    setBusted(!busted);
    dispatch({type: 'TOGGLE_BUSTED', payload: row.id}) 
  };
  
// calling a saga which will perform an axios.patch() 
// that sends an ID to the DB which toggles made_it true/false


  return (
    <TableRow
      key={row.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {row.player}
      </TableCell>
      <TableCell align="right">{row.score}</TableCell>
      <TableCell align="right">
        <input onInput={event => {setInput(event.nativeEvent.target.value);console.log('input:', input)}}/>
      </TableCell>
      <TableCell align="right">
        <Button
          onClick={handleMadeIt}
          variant="contained"
          color={"primary"}
        >
          {madeIt ? "Made it" : "Made it"}
        </Button>
        <Button
          onClick={handleBusted}
          variant="contained"
          color={"primary"}
        >
          {busted ? "Busted" : "Busted"}
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default PlayerReducer;
