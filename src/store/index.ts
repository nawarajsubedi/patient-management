import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";

const store = configureStore({
  reducer: {
    authentication: authReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
