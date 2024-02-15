const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.delete('/delete', (req,res) => {
    const queryText = `
    DELETE FROM "score"
    WHERE "id" = "id";
    `;
    console.log('req.body', req.body)
    pool
      .query(queryText)
      .then(() => {
        res.sendStatus(202)
      })
      .catch((err) => {
        res.sendStatus(500)
      })
  });

  router.get('/postScore', (req, res) => {
    const queryText = `
    SELECT "score", "player", "id" FROM "score"
    ORDER BY "score" DESC;
    `;
    pool
        .query(queryText)
        .then((response) => {
            res.send(response.rows)
            // res.sendStatus(200)
        })
        .catch((err) => {
            res.sendStatus(500)
        })
  })



module.exports = router;