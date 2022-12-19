import { Router } from "express";

import {
    loadMovies,
    addNewMovie,
    findMovie,
    updateMovie,
    deleteMovie,
} from "../controller/controller.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send(loadMovies());
});

router.post("/", (req, res) => {
  console.log(req.body);
  try {
    const createMovie = addNewMovie(req.body);
    res.status(201).send(createMovie);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.get("/:id", (req, res) => {
  // console.log(req.params.id);
  try {
    res.status(200).send(findMovie(req.params.id));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const movie = req.body;
  try {
    res.status(200).send(updateMovie(id, movie));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.delete("/:id", (req, res) => {
  try {
    res.status(200).send(deleteMovie(req.params.id));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

export default router;
