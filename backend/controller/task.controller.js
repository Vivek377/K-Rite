const jwt = require("jsonwebtoken");
const TaskModel = require("../model/task.model");

const getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find({ createdBy: req.body.userId });
    res.status(200).send(tasks);
  } catch (e) {
    console.log(e);
    res.status(400).send({ err: e.message });
  }
};

const createTask = async (req, res) => {
  try {
    const post = new TaskModel({ ...req.body, createdBy: req.body.userId });
    await post.save();
    res.status(200).send(post);
  } catch (e) {
    console.log(e);
    res.status(400).send({ err: e.message });
  }
};

const editTask = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    await TaskModel.findByIdAndUpdate({ _id: id }, payload);
    res.status(200).send({ msg: "post updated" });
  } catch (e) {
    console.log(e);
    res.status(400).send({ err: e.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await TaskModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "post deleted", id });
  } catch (e) {
    console.log(e);
    res.status(400).send({ err: e.message });
  }
};

module.exports = { getTasks, createTask, editTask, deleteTask };
