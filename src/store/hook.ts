import { useSelector } from "react-redux";
import { RootState } from ".";

export const useAuthentication = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated
  );
  return isAuthenticated;
};

export const useUser = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.user
  );
  return isAuthenticated;
};
