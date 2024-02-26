const { noteModel } = require("../Model/Note.model");
const { UserModel } = require("../Model/User.model");

const noteCreate = async (req, res) => {
  const { user_id, title, note, tags } = req.body;
  if (!title && !note && !tags) {
    res.send({ msg: "title,note,tags required" });
  }
  const user = await UserModel.findOne({ _id: user_id });
  if (!user) {
    res.send("user not available");
  } else {
    const notes = new noteModel({ title, note, tags, user_id });
    await notes.save();
    res.send("notes create");
  }
};
const noteGet = async (req, res) => {
  const { user_id } = req.body;
  const user = await UserModel.findOne({ _id: user_id });
  if (!user) {
    res.send("user not available");
  } else {
    const notes = await noteModel.find({ user_id });
    console.log(notes);
    res.send({ data: notes });
  }
};

const noteUpdate = async (req, res) => {
  const { user_id } = req.body;
  const { note_id } = req.params;
  console.log(typeof note_id);

  const user = await UserModel.findOne({ _id: user_id });
  if (!user) {
    res.send("user not available");
  } else {
    const notes = await noteModel.findOneAndUpdate(
      { user_id, _id: note_id },
      { ...req.body }
    );

    console.log(notes, "notes");
    res.send({ data: notes });
  }
  //   res.send("updated");
};

module.exports = {
  NoteController: {
    noteCreate,
    noteGet,
    noteUpdate,
  },
};
