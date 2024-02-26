const express = require("express");
const { connection } = require("./Config/db");
const { UserRoutes } = require("./Routes/User.routes");
const { NotesRouter } = require("./Routes/Notes.route");

const app = express();
app.use(express.json());

app.use("/user", UserRoutes);
app.use("/note", NotesRouter);

app.get("/", (req, res) => {
  // req.query
  res.send("HomePage");
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected");
  } catch (err) {
    console.log(err);
  }
  console.log("Listening on PORT 8080");
});
