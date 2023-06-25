import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { patientReducer } from "./slices/patient";
import { authReducer } from "./slices/auth";
import { patientDetailsReducer } from "./slices/patientDetails";
import { dashboardReportReducer } from "./slices/dashboardReport";

import type { PreloadedState } from "@reduxjs/toolkit";
import { highRiskReportReducer } from "./slices/highRiskReport";

const rootReducer = combineReducers({
  authentication: authReducer,
  patients: patientReducer,
  patientDetails: patientDetailsReducer,
  dashboardReport: dashboardReportReducer,
  highRiskReport: highRiskReportReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

const store: AppStore = setupStore();

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
