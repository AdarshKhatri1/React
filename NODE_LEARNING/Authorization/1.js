const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Connection } = require("./db");
const { userModel } = require("./UserModels");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Homepage");
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 4, function (err, hash) {
    if (err) {
      res.send("need email and password");
    } else {
      console.log(hash);
      const user = new userModel({ email, password: hash });
      user.save();
      res.send("success sign up");
    }
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  console.log(user);
  bcrypt.compare(password, user.password, function (err, result) {
    if (result) {
      var token = jwt.sign({ email }, "MysecretKey");
      console.log(token);
      res.send({ msg: "success login", token });
    } else {
      res.send("Wrong Credential");
    }
  });
  // res.send("login")
});

//authentication no authorization no
app.get("/product", (req, res) => {
  res.send("all products");
});

//authentication yes authorization no
app.get("/product/cart", async (req, res) => {
  const token = req.headers?.authorization?.split(" ")[1];
  try {
    var decode = jwt.verify(token, "MysecretKey");
    res.send("cart products");
  } catch (err) {
    res.send("not authenticated");
    // console.log(err)
  }
});

//authentication yes authorization yes
app.post("/product/create", async (req, res) => {
  const token = req.headers?.authorization?.split(" ")[1];
  try {
    var { email } = jwt.verify(token, "MysecretKey");
    const { role } = await userModel.findOne({ email });
    if (role == "Supplier") {
      res.send("create products");
    } else {
      res.send("not autho");
    }
  } catch (err) {
    res.send("not authorised");
    // console.log(err)
  }
});

app.listen(8080, () => {
  try {
    Connection;
    console.log("moongose connected");
  } catch (err) {
    console.log(err, "not connected");
  }
  console.log("server started on 8080");
});
