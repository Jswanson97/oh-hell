const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // GET route code here
    const queryText = `
    SELECT * FROM "players"
    `;
  
    pool
      .query(queryText)
      .then((result) => {
        console.log("results", result);
        res.send(result.rows)
      })
      .catch((err) => {
        console.log("Error getting players:", err)
        res.sendStatus(500);
      })
  });

  router.post("/" , (req, res) => {
    const queryText = `
    INSERT INTO "players"
    ("name")
    VALUES
    ($1);
    `;
    const queryParams = [req.body.name];
    console.log("req.body.name", req.body.name);

    pool
        .query(queryText, queryParams)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.error("error posting players:", err)
            res.sendStatus(500);
        })
  });

  router.delete("/:id", (req, res) => {
    const queryText = `
    DELETE FROM "players"
    WHERE "id" = $1;
    `;
    console.log(req.params.id)
    const queryParams = [req.params.id];
    pool
        .query(queryText, queryParams)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log("Error deleting player:", err);
            res.sendStatus(500)
        });
  });

  module.exports = router;