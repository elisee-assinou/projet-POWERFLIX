const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  movie_id: {
    type: String,
    required: true,
  },
  choice: {
    type: String,
    enum: ["like", "dislike"],
    required: true,
  },
});

module.exports = mongoose.model("Grade", gradeSchema);
