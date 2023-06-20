import { Patient } from "../store/thunks/patient";

export const getFullname = (patient?: Patient): string | undefined => {
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
