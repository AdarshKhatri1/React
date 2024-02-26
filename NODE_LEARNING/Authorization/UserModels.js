const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["Customer", "Seller", "Supplier"],
    default: "Supplier",
  },
});

const userModel = model("user", userSchema);

const Authentication = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  try {
    var decode = jwt.verify(token, "MysecretKey");
    //passing email to authorization because some url need both authentication and authorization
    // so 1st authentication call then authorization call
    req.body.email = decode.email;
    next();
  } catch (err) {
    console.log("err", err);
    res.send("not authenticated");
  }
};

const Authorization = async (req, res, next) => {
  var { email } = req.body;
  const { role } = await userModel.findOne({ email });
  if (role == "Supplier") {
    next();
  } else {
    res.send("not autho");
  }
};
const UpdatedAuthorization = (permittedRole) => {
  return async (req, res, next) => {
    var { email } = req.body;
    const { role } = await userModel.findOne({ email });
    console.log("role", role);
    if (permittedRole.includes(role)) {
      //important Line
      next();
    } else {
      res.send("not autho");
    }
  };
};

module.exports = {
  userModel,
  Authentication,
  Authorization,
  UpdatedAuthorization,
};
