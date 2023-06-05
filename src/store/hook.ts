import { useSelector } from "react-redux";
import { RootState } from ".";

export const useAuthentication = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated
  );
  return isAuthenticated;
};
