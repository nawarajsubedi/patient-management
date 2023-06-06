import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_URL } from "../../common/util";

export const getPatientList = createAsyncThunk(
  "patient/getPatientList",
  async (page: number, { rejectWithValue }) => {
    try {
      const result = await fetch(`${SERVER_URL}/patients`, {
        method: "GET",
        headers: {
          "content-type": "application/json;charset=UTF-8",
        },
      });

      const data = await result.json();
      return data.patients;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An error occurred");
    }
  }
);
