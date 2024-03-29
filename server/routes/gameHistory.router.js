const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `
    SELECT * FROM "games"
    WHERE "users" = 1;
    `;

    pool
        .query(queryText)
        .then((result) => {
            res.send(result.rows)
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});

module.exports = router;