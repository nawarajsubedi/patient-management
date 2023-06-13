import { configureStore } from "@reduxjs/toolkit";
import { patientReducer } from "./slices/patient";
import { authReducer } from "./slices/auth";

const store = configureStore({
  reducer: {
    authentication: authReducer,
    patients: patientReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
