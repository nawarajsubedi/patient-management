import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { patientReducer } from "./slices/patient";
import { authReducer } from "./slices/auth";
import { patientDetailsReducer } from "./slices/patientDetails";
import { dashboardReportReducer } from "./slices/dashboardReport";

import type { PreloadedState } from "@reduxjs/toolkit";

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  authentication: authReducer,
  patients: patientReducer,
  patientDetails: patientDetailsReducer,
  dashboardReport: dashboardReportReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

// const store = configureStore({
//   reducer: {
//     authentication: authReducer,
//     patients: patientReducer,
//     patientDetails: patientDetailsReducer,
//     dashboardReport: dashboardReportReducer,
//   },
// });

export default setupStore;
// export type AppStore = ReturnType<typeof setupStore>;
// export type AppDispatch = typeof setupStore.dispatch;
// export type RootState = ReturnType<typeof setupStore.getState>;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
