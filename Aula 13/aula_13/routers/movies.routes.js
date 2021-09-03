const express = require("express");
const router = express.Router();
const Movie = require("../models/movies");

router.get("/", async (req, res) => {
  await Movie.find({})
    .then((movies) => {
      res.status(200).send(movies);
    })
    .catch((err) => {
      res.status(400).send("Operation do not succeed.");
    });
});

router.get("/:name", async (req, res) => {
  await Movie.find({ name: req.params.name })
    .then((movies) => {
      res.send(movies);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", async (req, res) => {
  await Movie.create(req.body)
    .then(() => {
      res.status(200).send("Sucessfully Movie Add!");
    })
    .catch(() => {
      res.status(400).send("Something Went Wrong");
    });
});

router.put("/:id", async (req, res) => {
  await Movie.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.status(200).send("Atualizado com Sucesso!");
    })
    .catch(() => {
      res.status(400).send("Algo Errado!");
    });
});

router.delete("/:id", async (req, res) => {
  await Movie.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).send("Deletado com Sucesso!");
    })
    .catch(() => {
      res.status(400).send("Algo Errado!");
    });
});

module.exports = router;
