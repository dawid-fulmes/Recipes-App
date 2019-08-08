const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Recipe = new Schema({
  name: String,
  ingredients: [{ name: String, amount: Number, unit: String }],
  steps: [String],
  difficulty: Number,
  time: Number,
  servings: Number,
});

module.exports = mongoose.model("Recipe", Recipe);
