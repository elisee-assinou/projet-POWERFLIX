const express = require("express");
// const { userDataValidateChainMethod, validateUserData } = require('../models/user')

const router = express.Router();

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addMovieToUserPreferences,
  getUserPreferences,
  deletePreference,
} = require("../controllers/user.js");

const { login, register, mail_verification,logout } = require("../controllers/authController.js");

router.get("/user", getUsers);
router.get("/user/:userID", getUser);

router.post("/user", createUser);
router.post("/user/login", login);
router.post("/user/register", register);
router.post("/user/logout", logout);
// Route pour ajouter un film aux préférences de l'utilisateur
router.post("/:userId/preferences", addMovieToUserPreferences);

// Route pour récupérer les préférences de l'utilisateur
router.get("/:userId/preferences", getUserPreferences);

router.delete('/:userId/preferences/:movieId', deletePreference);





router.put("/user/:userID", updateUser);

router.get("mail_verification/:token", mail_verification)

router.delete("/user/:userID", deleteUser);

module.exports = router;
