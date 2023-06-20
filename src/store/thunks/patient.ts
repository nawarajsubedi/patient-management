import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GET_PATIENT_DATA_API,
  GET_PATIENT_DETAILS_DATA_API,
} from "../../common/url";
import { getAuth } from "../utils";

type FetchPatientsError = {
  message: string;
};
export interface Patient {
  patient_ssn: string;
  patient_firstname: string;
  patient_lastname: string;
  patient_country: string;
  patient_address1: string;
  patient_address2: string;
  patient_number1: string;
  patient_number2: string;
  patient_sex: string;
  patient_dob: string;
  patient_dod: string;
  patient_email: string;
  patient_height: number;
  patient_weight: number;
  patient_bloodtype: string;
  patient_education_background: string;
  patient_occupation: string;
  createdAt: string;
}

export interface PatientDetails {
  patient?: Patient;
  observations?: any;
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

export const getPatientDetails = createAsyncThunk<
  PatientDetails,
  { patientId: string },
  {
    rejectValue: FetchPatientsError;
  }
>("patient/getPatientDetails", async ({ patientId }, { rejectWithValue }) => {
  try {
    const { token } = getAuth();
    const url = GET_PATIENT_DETAILS_DATA_API.replace("{patientId}", patientId);

    const result = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json;charset=UTF-8",
      },
    });

    const patients = await result.json();
    console.log("patientDetails", patients);
    return patients;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue({ message: error.message });
    }
    return rejectWithValue({ message: "An error occurred" });
  }
});
