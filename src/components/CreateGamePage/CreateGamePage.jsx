import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostPlayer from "../AddPlayers/AddPlayers";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function CreateGame() {
  const dispatch = useDispatch();

  const player = useSelector((store) => store.player);
  const user = useSelector((store) => store.user);

  const handleDelete = (event) => {
    const deletePlayer = event.target.closest("button").id;

    const payload = event.target.id;
    dispatch({ type: "DELETE_PLAYERS", payload: payload });
  };

  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = () => {
    dispatch({ type: "FETCH_PLAYERS" });
  };

  return (
    <div className="container">
      <PostPlayer />
      <h2>Players</h2>
      {player?.map((item, i) => {
        return (
          <div id={item.id} key={i}>
            <p value="text">{item.name}</p>
            <button
              onClick={(event) => {
                handleDelete(event);
              }}
              id={item.id}
            >
              Delete player
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CreateGame;
