const jwt = require("jsonwebtoken");
const jwtSecret = "TokenCoding<Acca2emy ByPowerCodeToOurBestUserWithoutYou";

exports.auth_jwt_cookie = (req, res, next) => {
  const token = req.cookies.sacof_token;

  try {
    const auth_user = jwt.verify(token, jwtSecret);
    req.auth_user = auth_user;
    next();
  } catch (err) {
    req.clearCokie.sacof_token;
    return res.status(400).send({ error: err });
  }
};
