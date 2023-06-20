import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Patient, PatientDetails, getPatientDetails } from "../thunks/patient";

interface IPatientDetails {
  data: PatientDetails;
  status: "loading" | "idle";
  // `error` will contain an error message.
  error: string | null;
}

const INITIAL_STATE: IPatientDetails = {
  data: {
    patient: undefined,
    observations: undefined,
  },
  error: null,
  status: "idle",
};

const patientDetailsSlice = createSlice({
  name: "patientDetails",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPatientDetails.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(getPatientDetails.fulfilled, (state, { payload }) => {
      state.data = { ...payload };
      state.status = "idle";
    });

    builder.addCase(
      getPatientDetails.rejected,
      (state, { payload }: PayloadAction<any>) => {
        if (payload) state.error = payload.message;
        state.status = "idle";
      }
    );
  },
});

const patientDetailsAction = patientDetailsSlice.actions;
const patientDetailsReducer = patientDetailsSlice.reducer;

export { patientDetailsAction, patientDetailsReducer };
