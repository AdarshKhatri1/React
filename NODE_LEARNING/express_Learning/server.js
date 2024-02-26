const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to homepage");
});

app.get("/user", (req, res) => {
  res.send("welcome users ");
});

app.post("/user", (req, res) => {
  console.log(req);
  console.log(req.body);
  res.send("thanks user for post");
});

app.post("/save", (req, res) => {
  //   console.log(req);

  //   console.log(req.body);
  // appendFileSync; append your data inplace of delette previous and add new one
  fs.appendFileSync("./dummy", JSON.stringify(req.body), {
    encoding: "utf-8",
  });

  res.send("thanks user for post");
});

app.listen(8080, () => {
  console.log("Running on port 8080");
});
