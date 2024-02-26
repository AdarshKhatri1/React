const { Schema, model } = require("mongoose");

const Userschema = new Schema({
  name: { type: String, required: true },
  username: String,
  email: String,
  password: String,
  mobile: Number,
  country: String,
  gender: {
    type: String,
    enum: ["male", "female", "unspecified"],
  },
});

const UserModel = model("User", Userschema);
module.exports = UserModel;
