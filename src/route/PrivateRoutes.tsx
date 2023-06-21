import { Navigate, useLocation } from "react-router-dom";
import { useAuthentication } from "../store/hooks/auth";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const isAuthenticated = useAuthentication();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
