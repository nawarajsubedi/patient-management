import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_PATIENT_DATA_API } from "../../common/url";

type FetchPatientsError = {
  message: string;
};
export interface Patient {
  ssn: string;
  firstName: string;
  lastName: string;
  country: string;
  address1: string;
  address2: string;
  number1: string;
  number2: string;
  sex: string;
  DOB: string;
  DOD: string;
  email: string;
  height: string;
  weight: string;
  bloodType: string;
  educationBackground: string;
  occupation: string;
}

export const getPatientList = createAsyncThunk<
  Patient[],
  { page: number; rowsPerPage: number },
  {
    rejectValue: FetchPatientsError;
  }
>(
  "patient/getPatientList",
  async ({ page, rowsPerPage }, { rejectWithValue }) => {
    try {
      const result = await fetch(GET_PATIENT_DATA_API, {
        method: "GET",
        headers: {
          "content-type": "application/json;charset=UTF-8",
        },
      });

      const { patients } = await result.json();
      return patients;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue({ message: error.message });
      }
      return rejectWithValue({ message: "An error occurred" });
    }
  }
);
