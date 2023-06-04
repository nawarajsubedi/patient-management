import React, { createContext, useState } from "react";
import { signup as registration, signin } from "../services/auth/auth-services";

interface APIResponse {
  success: boolean;
  error?: { message?: string };
}

type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<APIResponse>;
  signup: (
    email: string,
    password: string,
    name: string
  ) => Promise<APIResponse>;
  logout: () => void;
};

const defaultResponse = {
  success: false,
  error: { message: "Not implemented" },
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: async () => defaultResponse,
  signup: async () => defaultResponse,
  logout: () => {},
});

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    let response: APIResponse = {
      success: true,
      error: undefined,
    };

    const result = await signin(email, password);
    if (!result.token) {
      response.success = false;
      response.error = { message: result?.message };
      return response;
    }

    setAuthToken(result.token);
    setIsAuthenticated(true);
    return response;
  };

  const signup = async (email: string, password: string, name: string) => {
    let response: APIResponse = {
      success: true,
      error: undefined,
    };

    const result = await registration(email, password, name);
    if (!result.token) {
      response.success = false;
      response.error = { message: result?.message };
      return response;
    }

    setAuthToken(result.token);
    setIsAuthenticated(true);
    return response;
  };

  const logout = () => {
    clearToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const getAuthToken = (): string | null => {
  return localStorage.getItem("token");
};

export const setAuthToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const clearToken = () => {
  localStorage.clear();
};
