import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { patientReducer } from "./patient";

const store = configureStore({
  reducer: {
    authentication: authReducer,
    patients: patientReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
