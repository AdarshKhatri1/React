const { UserModel } = require("../Model/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User_Sign_up = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const data = await UserModel.findOne({ email });
  if (!data) {
    bcrypt.hash(password, 4, async function (err, hash) {
      if (hash) {
        const user = new UserModel({ email, password: hash });
        const response = await user.save();
        console.log("res", response);
        res.send({ msg: "user Created" });
      }
      if (err) {
        res.status(500).send("Bcrypt error");
      }
    });
  } else {
    res.send({ msg: "user already exist" });
  }
};

const User_Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    res.send({ msg: "Wrong Credential" });
  } else {
    const data = await UserModel.findOne({ email });

    bcrypt.compare(password, data?.password, function (err, result) {
      if (err) {
        res.status(501).send({ msg: "Server error" });
      } else if (result) {
        var token = jwt.sign({ user_id: data?._id }, process.env.SECRET_KEY);
        res.send({ msg: "login successful", token });
      } else {
        res.send({ msg: "Wrong Credential" });
      }
    });
  }
};

module.exports = {
  UserController: {
    User_Sign_up,
    User_Login,
  },
};
