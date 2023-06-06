import { AuthResponse } from "../../component/common/interface/AuthResponse";
import { User } from "../../component/common/interface/User";
import { setAuthToken } from "../../store/utils";
const BASE_URL = "http://localhost:8080";

export const signup = async (email: string, password: string, name: string) => {
  const result = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  });

  const data = await result.json();

  let response: AuthResponse = {
    success: true,
    error: undefined,
  };

  if (!data.token) {
    response.success = false;
    response.error = { message: data?.message };
    return response;
  }
  const { user }: { user: User } = data;
  response.user = user;
  response.token = data.token;
  setAuthToken(data.token, user);

  return response;
};

export const signin = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const result = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await result.json();

  let response: AuthResponse = {
    success: true,
    error: undefined,
  };

  if (!data.token) {
    response.success = false;
    response.error = { message: data?.message };
    return response;
  }
  const { user }: { user: User } = data;
  response.user = user;
  response.token = data.token;
  setAuthToken(data.token, user);

  return response;
};

export const logout = () => {
  localStorage.clear();
};
