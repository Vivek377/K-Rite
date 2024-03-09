import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/auth/action";

const Navbar = () => {
  const { isAuth } = useSelector((res) => res.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <nav className="Navbar">
        <div>
          <Link to={"/"}>
            <h2 className="navigate">Dashboard</h2>
          </Link>
        </div>
        <div>
          <Link to={isAuth ? "" : "/login"}>
            <h2
              onClick={isAuth ? () => handleLogout() : null}
              className="navigate"
            >
              {isAuth ? "Logout" : "Login"}
            </h2>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
