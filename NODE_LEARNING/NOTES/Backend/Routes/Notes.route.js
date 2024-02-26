const { Router } = require("express");
const { NoteController } = require("../Controller/Notes.controller");
const { Authentication } = require("../Middleware/Authentication");

const NotesRouter = Router();

NotesRouter.post("/create", Authentication, NoteController.noteCreate);
NotesRouter.get("/get", Authentication, NoteController.noteGet);
NotesRouter.patch(
  "/update/:note_id",
  Authentication,
  NoteController.noteUpdate
);

module.exports = { NotesRouter };
