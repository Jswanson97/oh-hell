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



module.exports = router;