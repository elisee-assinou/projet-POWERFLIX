const express = require("express");

const router = express.Router();

const {
  getFavorites,
  getFavorite,
  createFavorite,
  updateFavorite,
  deleteFavorite,
} = require("../controllers/favorite.js");

router.get("/favorite", getFavorites);

router.get("/favorite/:favoriteID", getFavorite);

router.post("/favorite", createFavorite);

router.put("/favorite/:favoriteID", updateFavorite);

router.delete("/favorite/:favoriteID", deleteFavorite);

module.exports = router;
