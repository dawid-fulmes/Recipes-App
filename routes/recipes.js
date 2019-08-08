const express = require("express");
const router = express.Router();

const Recipe = require("../models/Recipe");

//POST
//Add new recipe
router.post("/add", (req, res) => {
  const recipe = new Recipe(req.body);
  recipe
    .save()
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;
