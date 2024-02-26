const { UserModel } = require("../Model/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const Authentication = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    res.send({ msg: "Login first" });
  } else {
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (err) {
        res.send({ msg: "Wrong Token" });
      }
      if (decoded) {
        console.log(decoded);
        req.body.user_id = decoded.user_id;
        next();
      }
    });
  }
};

const Authorization = (req, res, next) => {};
module.exports = { Authentication, Authorization };
