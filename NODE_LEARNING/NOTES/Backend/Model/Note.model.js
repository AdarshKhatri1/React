const { Schema, model } = require("mongoose");

const noteSchema = new Schema({
  title: { type: String, required: true },
  note: { type: String, required: true },
  tags: { type: String, required: true },
  user_id: { type: String, required: true },
});
const noteModel = model("note", noteSchema);

module.exports = { noteModel };
