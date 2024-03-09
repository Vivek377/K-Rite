const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (user) {
      res.status(200).send({ msg: "user already present" });
    } else {
      bcrypt.hash(password, 5, async (err, hashed) => {
        if (err) {
          res.status(400).send({ err: err });
        } else {
          const newUser = new UserModel({ username, password: hashed });
          await newUser.save({ username, password: hashed });
          res.status(200).send({ msg: "user registered successfully" });
        }
      });
    }
  } catch (e) {
    console.log(e);
    res.status(400).send({ err: e.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (user) {
      bcrypt.compare(password, user.password, async (err, result) => {
        if (err) {
          res.status(200).send({ err: "invalid password" });
        } else {
          const token = jwt.sign({ userId: user._id }, "secret");
          res.status(200).send({ msg: "loggged in", token: token });
        }
      });
    } else {
      res.status(200).send({ err: "no users found" });
    }
  } catch (e) {
    console.log(e);
    res.status(400).send({ err: e.message });
  }
};

module.exports = { login, register };
