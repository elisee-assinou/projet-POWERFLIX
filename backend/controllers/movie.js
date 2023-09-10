const Movie = require("../models/movie");

const getMovies = async (req, res) => {
  const movies = await Movie.find();
  return res.status(200).json(movies);
};

const getMovie = async (req, res) => {
  console.log("call of get One movie's function");
  const movieID = req.params.movieID;
  const movie = await Movie.findOne({ _id: movieID });
  if (!movie) {
    return res.status(404).send("Movie not found");
  }
  return res.status(200).json(movie);
};

const createMovie = async (req, res) => {
  console.log(req.body);
  const newMovie = new Movie({
    id: req.body.id,
    title: req.body.title,
    overview: req.body.overview,
    popularity: req.body.popularity,
    vote_count: req.body.vote_count,
    poster_path: req.body.poster_path,
    release_date: req.body.release_date,
    vote_average: req.body.vote_average,
  });

  // movies.push(newMovie);
  //   res.json(newMovie);
  try {
    newMovie.save().then((newMovie) => {
      return res.status(201).json(newMovie);
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateMovie = async (req, res) => {
  const movieID = req.params.movieID;
  const foundedMovie = await Movie.findOne({ _id: movieID });
  if (foundedMovie) {
    const updatedMovie = {
      id: req.body.id,
      title: req.body.title,
      overview: req.body.overview,
      popularity: req.body.popularity,
      vote_count: req.body.vote_count,
      poster_path: req.body.poster_path,
      release_date: req.body.release_date,
      vote_average: req.body.vote_average,
    };
    console.log(updatedMovie);
    // return res.status(200).json("Movie updated");

    const updateFinished = await Movie.replaceOne(foundedMovie, updatedMovie);
    if (updateFinished) {
      console.log(updateFinished);
    }
  }
};

const deleteMovie = async (req, res) => {
  const movieID = req.params.movieID;
  const isDelete = await Movie.findByIdAndRemove({ _id: movieID });
  if (isDelete) {
    return res.status(200).json("movie deleted");
  }
};

module.exports = {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
  // login,
};
