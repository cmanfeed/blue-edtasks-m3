const mongoose = require("mongoose");

function Conn() {
  mongoose.connect("mongodb://localhost:27017/usuario", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
