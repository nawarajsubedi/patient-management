import { LOGIN_URL, SIGNUP_URL } from "../../common/url";
import { AuthResponse } from "../../component/common/interface/AuthResponse";
import { User } from "../../component/common/interface/User";
import { setAuthToken } from "../../store/utils";

export const signup = async (email: string, password: string, name: string) => {
  const result = await fetch(SIGNUP_URL, {
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
  const {
    user,
    token,
    message,
  }: { user: User; token: string; message: string } = data;
  return parseResponse({ user, token, message });
};

export const signin = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const result = await fetch(LOGIN_URL, {
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
  const {
    user,
    token,
    message,
  }: { user: User; token: string; message: string } = data;
  return parseResponse({ user, token, message });
};

const parseResponse = ({
  user,
  token,
  message,
}: {
  user: User;
  token: string;
  message: string;
}) => {
  let response: AuthResponse = {
    success: true,
    error: undefined,
  };

  if (!token) {
    response.success = false;
    response.error = { message };
    return response;
  }
  response.user = user;
  response.token = token;
  setAuthToken(token, user);

  return response;
};

export const logout = () => {
  localStorage.clear();
};
