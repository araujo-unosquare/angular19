const express = require("express");
const products = express.Router();
const pool = require("../shared/pool");

products.get("/", (req, res) => {
  const mainCategoryId = req.query.maincategoryid;
  const subCategoryId = req.query.subcategoryid;
  const keyword = req.query.keyword;
  let query = "select * from products";
  let queryParams = [];

  if (mainCategoryId) {
    query =
      "select products.* from products join categories on products.category_id = categories.id where categories.parent_category_id = ?";
    queryParams.push(mainCategoryId);
    if (keyword) {
      query += " and keywords like '%" + keyword + "%'";
    }
  } else if (subCategoryId) {
    query += " where category_id = ?";
    queryParams.push(subCategoryId);
  }

  pool.query(query, queryParams, (err, products) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(products);
  });
});

products.get("/:id", (req, res) => {
  let id = req.params.id;
  pool.query("select * from products where id = ?", [id], (err, product) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(product);
  });
});

module.exports = products;
