const express = require("express");
const cors = require("cors");
const { Connections } = require("./Config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { userModel } = require("./Model/UserModel");
const { Authentication } = require("./MiddleWare/Authentication");
const { bmiModel } = require("./Model/BimModel");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HomePage");
});
app.delete("/del", async (req, res) => {
  await userModel.deleteMany({});
  res.send("deleted");
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  //checking user is present or not. true return already exist else create one
  const isUser = await userModel.findOne({ email });

  console.log(isUser);
  if (isUser) {
    res.send({ msg: "user already exit try login" });
  } else {
    bcrypt.hash(password, 4, async function (err, hash) {
      if (err) {
        res.send({ msg: "try again later" });
      }
      const newuser = new userModel({ email, password: hash, name });
      try {
        const data = await newuser.save();
        res.send({ msg: "sign up successful" });
      } catch (err) {
        res.send({ msg: "try again after sometime" });
      }
    });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const finduser = await userModel.findOne({ email });
  console.log(finduser, "find user");
  if (!finduser) {
    res.send({ msg: "sign up first" });
  } else {
    const user_id = finduser._id;
    bcrypt.compare(password, finduser.password, function (err, result) {
      if (err) {
        res.send({ msg: "Something wrong please try again after sometime" });
      }
      if (result) {
        var token = jwt.sign({ user_id }, process.env.SECRET_KEY);

        res.send({ msg: "successful Login", token });
      } else {
        res.send({ msg: "Login failed" });
      }
    });
  }
});

app.get("/getProfile", Authentication, async (req, res) => {
  const { user_id } = req.body;
  console.log(user_id, "user_id ");
  const { email, name } = await userModel.findOne({ _id: user_id });
  res.send({
    email,
    name,
  });
});

app.post("/calculateBmi", Authentication, async (req, res) => {
  let { height, weight, user_id } = req.body;
  console.log(user_id);
  height = Number(height);
  weight = Number(weight);
  const bmi = height * weight;
  const newBmi = new bmiModel({
    height,
    weight,
    bmi,
    user_id,
  });
  await newBmi.save(newBmi);
  res.send({ bmi });
});

app.get("/allBmi", Authentication, async (req, res) => {
  const { user_id } = req.body;
  console.log(user_id);
  const bmidata = await bmiModel.find({ user_id });
  // res.send("all Bmi");
  console.log(bmidata);
  res.send({ bmidata });
});

app.listen(8000, async () => {
  try {
    await Connections;
    console.log("successful connected");
  } catch (err) {
    console.log("Err");
  }
  console.log("listening on port 8080");
});
