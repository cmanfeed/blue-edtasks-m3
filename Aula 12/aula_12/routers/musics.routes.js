const express = require("express");
const router = express.Router();
const Music = require("../models/musics");

router.get("/", async (req, res) => {
  await Music.find({})
    .then((musics) => {
      res.send(musics);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:name", async (req, res) => {
  await Music.find({ name: req.params.name })
    .then((musics) => {
      res.send(musics);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", async (req, res) => {
  await Music.create(req.body)
    .then(() => {
      res.status(200).send("Musica adicionada com sucesso");
    })
    .catch(() => {
      res.status(400).send("Algo errado com a música, tente novamente!");
    });
});

router.put("/:id", async (req, res) => {
  await Music.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.status(200).send("Atualizado com Sucesso!");
    })
    .catch(() => {
      res.status(400).send("Algo Errado!");
    });
});

router.delete("/:id", async (req, res) => {
  await Music.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).send("Deletado com Sucesso!");
    })
    .catch(() => {
      res.status(400).send("Algo Errado!");
    });
});

module.exports = router;
