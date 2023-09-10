const express = require("express");

const router = express.Router();

const {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movie.js");

router.get("/movie", getMovies);

router.get("/movie/:movieID", getMovie);

router.post("/movie", createMovie);

router.put("/movie/:movieID", updateMovie);

router.delete("/movie/:movieID", deleteMovie);

module.exports = router;
