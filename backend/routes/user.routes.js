const express = require("express");
const { login, register } = require("../controller/user.controller");
const userRoute = express.Router();

userRoute.post("/login", login);
userRoute.post("/register", register);

module.exports = userRoute;
