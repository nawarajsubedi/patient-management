import { configureStore } from "@reduxjs/toolkit";
import { patientReducer } from "./slices/patient";
import { authReducer } from "./slices/auth";
import { patientDetailsReducer } from "./slices/patientDetails";
import { dashboardReportReducer } from "./slices/dashboardReport";

const store = configureStore({
  reducer: {
    authentication: authReducer,
    patients: patientReducer,
    patientDetails: patientDetailsReducer,
    dashboardReport: dashboardReportReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
