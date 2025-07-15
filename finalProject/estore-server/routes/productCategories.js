const express = require("express");
const pool = require("../shared/pool");
const productCategories = express.Router();

productCategories.get("/", (req, res) => {
  pool.query("select * from categories", (err, categories) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(categories);
  });
});

module.exports = productCategories;
