const express = require("express");
const Conn = require("./models/conn/conn");

Conn();

const app = express();
app.use(express.json());

const musicRoutes = require("./routers/musics.routes");
app.use("/musics", musicRoutes);

app.listen(3000, () => {
  console.info("Servidor rodando...");
});
