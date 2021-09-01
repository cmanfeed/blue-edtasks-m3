const mongoose = require("mongoose");

const musicModel = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  gender: { type: String, required: true },
  duration: { type: Number, required: true },
  coverImg: { type: String },
  dateCreation: { type: Date, default: Date.now },
});

const Music = mongoose.model("musics", musicModel);

module.exports = Music;
