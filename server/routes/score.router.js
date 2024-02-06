const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `
    SELECT * FROM "score"
    WHERE "round" = 4
    ORDER BY "score"."score" DESC;
    `;

    // add ability to query against current round
    //const queryParams = [req.body]


    pool
        .query(queryText)
        .then((result) => {
            console.log("score.router GET results:", result)
            res.send(result.rows)
        })
        .catch((err) => {
            console.log("Error getting scores:", err)
            res.sendStatus(500);
        })
});



module.exports = router;