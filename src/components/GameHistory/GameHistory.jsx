import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function GameHistory() {
    const dispatch = useDispatch();
    const gameHistoryStore = useSelector((store) => store.gameHistoryReducer)
    

    const getGameHistory = () => {
        dispatch({ type: "FETCH_GAME_HISTORY"});
    };

    useEffect(() => {
        getGameHistory();
    }, []);

    const gameHistory = (event) => {
        //history.pushState('')
        console.log('this will go to an expanded view of the game')
    }

    return (
    <div className="container">
        <h1>Game History</h1>
        {gameHistoryStore?.map((item, i) => {
            return (
                <div key={i}>
                <p>Game Winner</p>
                <button onClick={gameHistory}>{item.winner}</button>
                </div>
            )
        })}
    </div>
    )
}

export default GameHistory;