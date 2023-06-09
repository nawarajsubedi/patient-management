import { createSlice } from "@reduxjs/toolkit";
import { getAuth } from "../utils";
import { User } from "../../services/auth/auth-services";

interface IAuthentication {
  isAuthenticated: boolean;
  token: string | undefined | null;
  user?: User;
}

const auth = getAuth();
const INITIAL_STATE: IAuthentication = {
  isAuthenticated: !!auth.token,
  token: auth.token,
  user: auth.user,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: INITIAL_STATE,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

const authAction = authSlice.actions;
const authReducer = authSlice.reducer;

export { authReducer, authAction };
