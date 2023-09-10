const Favorite = require("../models/favorite");

const getFavorites = async (req, res) => {
  const favorites = await Favorite.find();
  return res.status(200).json(favorites);
};

const getFavorite = async (req, res) => {
  console.log("call of get One favorite's function");
  const favoriteID = req.params.favoriteID;
  const favorite = await Favorite.findOne({ _id: favoriteID });
  if (!favorite) {
    return res.status(404).send("Favorite not found");
  }
  return res.status(200).json(favorite);
};

const createFavorite = async (req, res) => {
  console.log(req.body);
  const newFavorite = new Favorite({
    id: req.body.id,
  });

  // favorites.push(newFavorite);
  //   res.json(newFavorite);
  try {
    newFavorite.save().then((newFavorite) => {
      return res.status(201).json(newFavorite);
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateFavorite = async (req, res) => {
  const favoriteID = req.params.favoriteID;
  const foundedFavorite = await Favorite.findOne({ _id: favoriteID });
  if (foundedFavorite) {
    const updatedFavorite = {
      id: req.body.id,
    };
    console.log(updatedFavorite);
    // return res.status(200).json("Favorite updated");

    const updateFinished = await Favorite.replaceOne(foundedFavorite, updatedFavorite);
    if (updateFinished) {
      console.log(updateFinished);
    }
  }
};

const deleteFavorite = async (req, res) => {
  const favoriteID = req.params.favoriteID;
  const isDelete = await Favorite.findByIdAndRemove({ _id: favoriteID });
  if (isDelete) {
    return res.status(200).json("favorite deleted");
  }
};

module.exports = {
  getFavorites,
  getFavorite,
  createFavorite,
  updateFavorite,
  deleteFavorite,
  // login,
};
