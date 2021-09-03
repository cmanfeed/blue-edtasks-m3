const mongoose = require("mongoose");

function Conn() {
  mongoose
    .connect("mongodb://localhost:27017/movies", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected: Movies Table");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = Conn;
