const mongoose = require("mongoose");

const favorite = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  movie_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Favorite', favorite);
