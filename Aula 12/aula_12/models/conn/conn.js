const mongoose = require("mongoose");

function Conn() {
  mongoose
    .connect("mongodb://localhost:27017/musics", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connectado");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = Conn;
