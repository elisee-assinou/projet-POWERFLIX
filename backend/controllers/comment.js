const Comment = require("../models/comment");

const getComments = async (req, res) => {
  const comments = await Comment.find();
  return res.status(200).json(comments);
};

const getComment = async (req, res) => {
  //   console.log("call of get One comment's function");
  const commentID = req.params.commentID;
  const comment = await Comment.findOne({ _id: commentID });
  if (!comment) {
    return res.status(404).send("Comment not found");
  }
  return res.status(200).json(comment);
};

const createComment = async (req, res) => {
  console.log(req.body);
  const newComment = new Comment({
    user_id: req.body.user_id,
    movie_id: req.body.movie_id,
    content: req.body.content,
  });

  // comments.push(newComment);
  //   res.json(newComment);
  try {
    newComment.save().then((newComment) => {
      return res.status(201).json(newComment);
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateComment = async (req, res) => {
  const commentID = req.params.commentID;
  const foundedComment = await Comment.findOne({ _id: commentID });
  if (foundedComment) {
    const updatedComment = {
      user_id: req.body.user_id,
      movie_id: req.body.movie_id,
      content: req.body.content,
    };
    console.log(updatedComment);
    // return res.status(200).json("Comment updated");
    const updateFinished = await Comment.replaceOne(
      foundedComment,
      updatedComment
    );
    if (updateFinished) {
      console.log(updateFinished);
      res.status(200).send({success: "comment send successfuly"})
    }
  }
};

const deleteComment = async (req, res) => {
  const commentID = req.params.commentID;
  const isDelete = await Comment.findByIdAndRemove({ _id: commentID });
  if (isDelete) {
    return res.status(200).json("comment deleted");
  }
};

// Fonction pour obtenir tous les commentaires d'un film par son ID
const getCommentsByMovieId = async (req, res) => {
  try {
    const movieId = req.params.movieId;

    // Recherchez tous les commentaires liés au film par son ID
    const comments = await Comment.find({ movie_id: movieId });

    return res.status(200).json(comments);
  } catch (error) {
    console.error('Erreur lors de la récupération des commentaires :', error);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
};

module.exports = {
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
  getCommentsByMovieId
  // login,
};
