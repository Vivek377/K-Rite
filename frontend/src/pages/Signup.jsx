import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupUser } from "../redux/auth/action";

const Signup = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== "" && user.username !== "") {
      dispatch(signupUser(user));
    } else {
      alert("Please Fill All Details");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>UserName</span>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <Link to={"/login"}>Already have Account? Login</Link>
        <input type="submit" />
      </form>
    </>
  );
};

export default Signup;
