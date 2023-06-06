import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Patient } from "../component/common/interface/Patient";
import { getPatientList } from "./thunks/patient";

interface IPatient {
  data: Patient[];
  status: "loading" | "idle";
  // `error` will contain an error message.
  error: string | null;
}

const INITIAL_STATE: IPatient = {
  data: [],
  error: null,
  status: "idle",
};

const patientSlice = createSlice({
  name: "patient",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPatientList.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(getPatientList.fulfilled, (state, { payload }) => {
      state.data = [...payload];
      state.status = "idle";
    });

    builder.addCase(
      getPatientList.rejected,
      (state, { payload }: PayloadAction<any>) => {
        if (payload) state.error = payload.message;
        state.status = "idle";
      }
    );
  },
});

const patientAction = patientSlice.actions;
const patientReducer = patientSlice.reducer;

export { patientAction, patientReducer };
