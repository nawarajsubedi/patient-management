import { format } from "date-fns";
import { HighRiskPatient, Patient } from "../store/thunks/patient";

export const getFullname = (
  patient?: Patient | HighRiskPatient
): string | undefined => {
  return `${patient?.patient_firstname} ${patient?.patient_lastname}`;
};

export const getGender = (sex: string | undefined): string | undefined => {
  switch (sex) {
    case "M":
      return "Male";
    case "F":
      return "Female";
    default:
      return "";
  }
};

export const booleanToYesNo = (booleanValue: boolean): string | undefined => {
  switch (booleanValue) {
    case true:
      return "YES";
    case false:
      return "NO";
    default:
      return "";
  }
};

export const formatDate = (date: string | Date): string => {
  return format(new Date(date), "dd/MM/yyyy");
};

export const formatTime = (date: string | Date): string => {
  return format(new Date(date), "hh:mm a");
};
