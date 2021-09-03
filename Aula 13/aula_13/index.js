const express = require("express");
const Conn = require("./models/conn/conn");

Conn();

const app = express();
app.use(express.json());

const moviesRoutes = require("./routers/movies.routes");
app.use("/movies", moviesRoutes);

app.listen(3000, () => {
  console.info("Servidor rodando...");
});
