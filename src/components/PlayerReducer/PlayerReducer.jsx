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

function PlayerReducer({row}) {
    return(
<TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.score}</TableCell>
                <TableCell align="right">
                  <input />
                </TableCell>
                <TableCell align="right">
                  <button>Made it</button>
                </TableCell>
                <TableCell align="right">
                  <button>Busted</button>
                </TableCell>
              </TableRow>
    )
}

export default PlayerReducer;