const express = require("express");
const {
  getTasks,
  createTask,
  editTask,
  deleteTask,
} = require("../controller/task.controller");
const taskRoute = express.Router();

taskRoute.get("/", getTasks);
taskRoute.post("/add", createTask);
taskRoute.patch("/edit/:id", editTask);
taskRoute.delete("/delete/:id", deleteTask);

module.exports = taskRoute;
