const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  movie_id: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Comment', commentSchema);
