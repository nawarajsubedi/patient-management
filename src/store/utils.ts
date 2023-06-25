import { User } from "../services/auth/auth-services";

export const getAuth = () => {
  const token = localStorage.getItem("token");
  const userObj = localStorage.getItem("user");
  const user: User = userObj ? JSON.parse(userObj) : null;

  return { token, user: user };
};

export const setAuthToken = (token: string, user: User) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

export const clearToken = () => {
  localStorage.clear();
};
