import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  HighRiskObservationReport,
  getHighRiskReport,
} from "../thunks/patient";

interface IHighRiskReport {
  data: HighRiskObservationReport;
  status: "loading" | "idle";
  // `error` will contain an error message.
  error: string | null;
}
const INITIAL_STATE: IHighRiskReport = {
  data: {
    highRiskCoveredPractitioners: [],
    highRiskPatients: [],
    observations: [],
  },
  error: null,
  status: "idle",
};
const highRiskReportsSlice = createSlice({
  name: "hightRiskReport",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHighRiskReport.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(getHighRiskReport.fulfilled, (state, { payload }) => {
      state.data = { ...payload };
      state.status = "idle";
    });

    builder.addCase(
      getHighRiskReport.rejected,
      (state, { payload }: PayloadAction<any>) => {
        if (payload) state.error = payload.message;
        state.status = "idle";
      }
    );
  },
});

const highRiskReportActions = highRiskReportsSlice.actions;
const highRiskReportReducer = highRiskReportsSlice.reducer;

export { highRiskReportActions, highRiskReportReducer };
