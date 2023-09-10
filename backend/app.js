const express = require("express");
const cors = require('cors');
require("dotenv").config();
const app = express();

// Configurer les options CORS
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
};


const port = 5000;

const routes_user = require("./router/user");
const routes_movie = require("./router/movie");
const routes_grade = require("./router/grade");
const routes_comment = require("./router/comment");
const routes_favorite = require("./router/favorite");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose
  .connect("mongodb://127.0.0.1:27017/power_flix")
  .then(console.log("connected succesfully"))
  .catch((error) => {
    console.log("connexion refused : " + error);
  });

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(express.json());


app.use(routes_user);
app.use(routes_movie);
app.use(routes_grade);
app.use(routes_comment);
app.use(routes_favorite);

// My user routes :
app.get("/user", routes_user);
app.get("/user/:id", (req, res) => {
  routes_user;
});
app.post("/user", (req, res) => {
  routes_user;
});
app.post("/user/login", (req, res) => {
  routes_user.login(req, res);
});

app.post("/user/register", (req, res) => {
  routes_user;
});
app.delete("/user/:id", (req, res) => {
  routes_user;
});
app.put("/user/:userID", (req, res) => {
  routes_user;
});

app.get("/user/mail_verification/:token", (req, res) => {
  routes_user;
});

// My movies routes
app.get("/movie", (req, res) => {
  routes_movie;
});
app.post("/movie", (req, res) => {
  routes_movie;
});

app.put("/movie/:movieID", (req, res) => {
  routes_movie;
});

app.get("/movie/:movieID", (req, res) => {
  routes_movie;
});

// Comments routes
app.post("/comment", (req, res) => {
  routes_comment;
});
app.get("/comment/:commentID", (req, res) => {
  routes_comment;
});
app.put("/comment/:commentID", (req, res) => {
  routes_comment;
});

// Farorites routes
app.post("/favorite", (req, res) => {
  routes_favorite;
});
app.get("/favorite/:favoriteID", (req, res) => {
  routes_favorite;
});
app.put("/favorite/:favoriteID", (req, res) => {
  routes_favorite;
});
app.delete("/favorite/:favoriteID", (req, res) => {
  routes_favorite;
});

// My grade routes
app.post("/grade", (req, res) => {
  routes_grade;
});
app.get("/grade/:gradeID", (req, res) => {
  routes_grade;
});
app.put("/grade/:gradeID", (req, res) => {
  routes_grade;
});
app.delete("/grade/:gradeID", (req, res) => {
  routes_grade;
});
// app.get("/movies", routes_movie);

// app.get("/users", routes_user);
// app.get("/users", routes_user);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", (req, res) => {
  console.log(req);
  routes_user;
});

app.listen(port, () => {
  console.log(`Power_flix listening on port ${port}`);
});
