const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  completed: { type: Boolean },
  dueDate: { type: String },
  createdBy: { type: String },
});

const TaskModel = mongoose.model("task", TaskSchema);

module.exports = TaskModel;
