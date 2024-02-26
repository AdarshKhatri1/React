const jwt = require("jsonwebtoken");

const Authentication = async (req, res, next) => {
  const token = await req.headers?.authorization?.split(" ")[1];
  console.log(token, "token");
  if (token == "null" || token == null) {
    console.log("nuull token222222");
    res.send("login first");
  } else {
    console.log("tokne2324342", token);
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (decoded) {
      req.body.user_id = decoded.user_id;
      next();
    } else {
      res.send("expired token");
    }
  }
};

module.exports = { Authentication };
