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

//GET
//Get all recipes
router.get("/", (req, res) => {
  Recipe.find((err, recipes) => {
    res.json(recipes);
  });
});

//GET
//Get recipe by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Recipe.findById(id, (err, recipe) => {
    if (err) {
      res.status(404).send("data is not found");
    } else {
      res.status(200).json(recipe);
    }
  });
});

module.exports = router;
