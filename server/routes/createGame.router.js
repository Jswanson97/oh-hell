const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post("/", (req,res) => {
    const queryText = `
    INSERT INTO "score" ("id","player", "round", "game_id", "made_it")
    SELECT "id", "name", 0, 1, false
    FROM "players";
    `;
    console.log("req", req)

    pool
        .query(queryText)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log("error getting all players for game", err)
            res.sendStatus(500)
        })
});

module.exports = router;