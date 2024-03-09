import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const { isAuth } = useSelector((res) => res.user);

  if(isAuth) return children

  return <Navigate to={"/login"} />;
};

export default PrivateRoute;
