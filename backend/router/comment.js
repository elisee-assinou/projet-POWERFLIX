const express = require("express");

const router = express.Router();

const {
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
  getCommentsByMovieId,
} = require("../controllers/comment.js");

router.get("/comment", getComments);

router.get("/comment/:commentID", getComment);

// Ajoutez un / au début du chemin
router.get("/:movieId/comment", getCommentsByMovieId);

router.post("/comment", createComment);

router.put("/comment/:commentID", updateComment);

router.delete("/comment/:commentID", deleteComment);

module.exports = router;
