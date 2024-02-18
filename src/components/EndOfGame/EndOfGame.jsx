import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import postScoreReducer from "../../redux/reducers/PostScore.reducer";

function EndOfGame ()  {
    const dispatch = useDispatch();
    const history = useHistory();

    const score = useSelector((store) => store.postScoreReducer)

    useEffect(() => {
        getScore();
    }, []);

    const getScore = () => {
        dispatch({ type: 'FETCH_PLAYER_SCORE'})
    };

    const playAgain = () => {
        dispatch({ type: 'DELETE_ALL_SCORE'})
        history.push('/createGame')
    };
    const endGame = () => {
        dispatch({ type: 'DELETE_ALL_SCORE'})
        history.push('/user')   
    };
return (
    <div className='container'>
        <h1>This is the end of the game</h1>
        {console.log('getScore:', getScore)}
        {score?.map((item, i) => {
            return (
                <div id={item.id} key={i}>
                    <ul>
                    <li value='text'>{item.player}: score:{item.score}</li>
                    </ul>
                    
                </div>
            )
        })}
        <button onClick={playAgain}>Play again</button>
        <button onClick={endGame}>Menu</button>
    </div>
)
}

export default EndOfGame;