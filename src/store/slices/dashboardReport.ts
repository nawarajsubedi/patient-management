import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  DashboardReport,
  Patient,
  PatientDetails,
  getDashboardReport,
} from "../thunks/patient";

interface IDashboardReport {
  data: DashboardReport;
  status: "loading" | "idle";
  // `error` will contain an error message.
  error: string | null;
}
const INITIAL_STATE: IDashboardReport = {
  data: {
    patientCount: 0,
    practitionerCount: 0,
    nurseCount: 0,
    observationCount: 0,
    nurseByPatient: {
      names: [],
      counts: [],
      ids: [],
    },
    practitionerByPatient: {
      names: [],
      counts: [],
      ids: [],
    },
    medicationByPatient: {
      names: [],
      counts: [],
      ids: [],
    },
    patients: [],
  },
  error: null,
  status: "idle",
};
const dashboardReportsSlice = createSlice({
  name: "dashboardReport",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDashboardReport.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(getDashboardReport.fulfilled, (state, { payload }) => {
      state.data = { ...payload };
      state.status = "idle";
    });

    builder.addCase(
      getDashboardReport.rejected,
      (state, { payload }: PayloadAction<any>) => {
        if (payload) state.error = payload.message;
        state.status = "idle";
      }
    );
  },
});

const dashboardReportActions = dashboardReportsSlice.actions;
const dashboardReportReducer = dashboardReportsSlice.reducer;

export { dashboardReportActions, dashboardReportReducer };
