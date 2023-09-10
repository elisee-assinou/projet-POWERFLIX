const User = require("../models/user");
const bcrypt = require("bcrypt");

// // Middleware
// const validateUserData = (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     console.log("Sacof : validation error");
//     return res.status(400).json({ errors: errors.array() });
//   }
//   next();
// };
// const userDataValidateChainMethod = [
//   body("name")
//     .exists({ checkFalsy: true })
//     .withMessage("User name is required")
//     .isString()
//     .withMessage("User name should be string"),
//   body("password")
//     .exists({ checkFalsy: true })
//     .withMessage("Password is required")
//     .isString()
//     .withMessage("Password should be string")
//     .isLength({ min: 6 })
//     .withMessage("Password should be at least 6 characters"),
//   body("email")
//     .exists({ checkFalsy: true })
//     .isEmail()
//     .withMessage("Provide valid email"),
//   body("isAdmin").exists().isBoolean().default(false),
//   body("isVerify").exists().isBoolean().default(false),
//   body("token").exists().isString().default(""),
// ];

const getUsers = async (req, res) => {
  const users = await User.find();
  return res.status(200).json(users);
};

const getUser = async (req, res) => {
  console.log("call of get One user's function");
  const userID = req.params.userID;
  const user = await User.findOne({ _id: userID });
  if (!user) {
    return res.status(404).send("User not found");
  }
  return res.status(200).json(user);
};

// const login = async (req, res) => {
//   const loginUser = await User.findOne({
//     email: req.body.email,
//   });
//   // console.log(loginUser)

//   if (loginUser) {
//     const isPasswordCorrect = await bcrypt.compare(
//       req.body.password,
//       loginUser.password
//     );
//     if (isPasswordCorrect) {
//       return res
//         .status(200)
//         .send({ message: "Login successfully" + loginUser });
//     }
//   }
//   // const userID = req.body.email;
//   // const user = await User.findOne({ _id: userID });
//   // if (!user) {
//   //   return res.status(404).send("User not found");
//   // }
//   return res.status(400).json("Login Error");
// };

const createUser = async (req, res) => {
  // console.log(req.body);
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    isAdmin: req.body.isAdmin,
    isVerify: req.body.isVerify,
    token: "",
  });

  // users.push(newUser);
  //   res.json(newUser);
  try {
    newUser.save().then((newUser) => {
      return res.status(201).json(newUser);
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateUser = async (req, res) => {
  const userID = req.params.userID;
  const foundedUser = await User.findOne({ _id: userID });
  if (foundedUser) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const updatedUser = {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      isAdmin: req.body.isAdmin,
      isVerify: req.body.isVerify,
      token: "",
      // token: req.body.token,
    };
    console.log(updatedUser);
    // return res.status(200).json("User updated");

    const updateFinished = await User.replaceOne(foundedUser, updatedUser);
    if (updateFinished) {
      return res.status(200).send({success: "user update successfuly"});
      console.log(updateFinished);
    }
  }
};

const deleteUser = async (req, res) => {
  const userID = req.params.userID;
  const isDelete = await User.findByIdAndRemove({ _id: userID });
  if (isDelete) {
    return res.status(200).json("user deleted");
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  // login,
};
