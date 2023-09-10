const mongoose = require("mongoose");

const genre = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Genre', genre);
