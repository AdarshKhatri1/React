const express = require("express");
const connection = require("./Storage/db");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected");
  } catch (err) {
    console.log("err");
  }
  console.log("running on port 8080");
});
