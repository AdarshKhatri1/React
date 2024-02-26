const { Router } = require("express");
const { UserController } = require("../Controller/User.controller");
const { Authentication } = require("../Middleware/Authentication");

const UserRoutes = Router();

UserRoutes.post("/signup", UserController.User_Sign_up);

UserRoutes.post("/login", UserController.User_Login);

module.exports = { UserRoutes };
