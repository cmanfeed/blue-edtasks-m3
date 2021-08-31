const express = require("express");
const mongoose = require("mongoose");
const usuario = require("./models/usuario");

mongoose.connect("mongodb://localhost:27017/usuario", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const usuario1 = new usuario({
//   nome: "Ivonaldo",
//   sobrenome: "da Silva",
//   cpf: "062663888399",
//   idade: new Date(),
//   senha: "32333ij2i3aksnd",
// });

// usuario1
//   .save()
//   .then(() => {
//     console.log("Filme Salvo");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// lista todos os users
// usuario
//   .find({})
//   .then((usuarios) => {
//     console.log(usuarios);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// usuario
//   .findByIdAndDelete("612d6e973a31b21994377099")
//   .then(() => {
//     console.log("Usuário Deletado!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Bluemers!");
});

app.get("/usuarios", (req, res) => {
  usuario
    .find({})
    .then((usuarios) => {
      console.log(usuarios);
      res.send(usuarios);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3000, () => {
  console.log("App rodando na porta 3000!");
});
