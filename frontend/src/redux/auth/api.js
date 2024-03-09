import axios from "axios";

const login = async (user) => {
  const res = await axios.post("http://localhost:3287/user/login", user);
  return res;
};

const signup = async (user) => {
  const res = await axios.post("http://localhost:3287/user/register", user);
  return res;
};

export { login, signup };
