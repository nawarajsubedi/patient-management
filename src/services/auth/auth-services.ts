import { LOGIN_URL, SIGNUP_URL } from "../../common/url";
import { setAuthToken } from "../../store/utils";

export interface User {
  email: string;
  id: string;
  name: string;
}

export interface AuthResponse {
  success: boolean;
  token?: string;
  user?: User;
  error?: { message?: string };
}

export const signup = async (
  email: string,
  password: string,
  name: string
): Promise<AuthResponse> => {
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

  const { data } = await result.json();
  const {
    accessToken: token,
    message,
    id,
    name,
  }: { accessToken: string; message: string; id: string; name: string } = data;
  return parseResponse({ user: { name, id, email }, token, message });
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
