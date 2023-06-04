import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = (props: { children: JSX.Element }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth?.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return props.children;
};

export default PrivateRoute;
