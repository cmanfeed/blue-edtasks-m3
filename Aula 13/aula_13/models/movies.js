const mongoose = require("mongoose");

const movieModel = new mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Number },
  studio: { type: String },
  gender: { type: String, required: true },
});

const Movie = mongoose.model("movies", movieModel);

module.exports = Movie;
