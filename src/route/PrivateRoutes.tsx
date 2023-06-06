import { Navigate, useLocation } from "react-router-dom";
import { useAuthentication } from "../store/hook";
// import { useAuth } from "../hooks/useAuth";

const PrivateRoute = (props: { children: JSX.Element }) => {
  const isAuthenticated = useAuthentication();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return props.children;
};

export default PrivateRoute;
