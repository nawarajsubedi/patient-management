import { createSlice } from "@reduxjs/toolkit";

interface IAuthentication {
  isAuthenticated: boolean;
}

const INITIAL_STATE: IAuthentication = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: INITIAL_STATE,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
    },
  },
});

const authAction = authSlice.actions;
const authReducer = authSlice.reducer;

export { authReducer, authAction };
