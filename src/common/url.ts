const API_URL = process.env.REACT_APP_API_URL;

const LOGIN_URL = `${API_URL}/users/signin`;
const SIGNUP_URL = `${API_URL}/users/signup`;
const GET_PATIENT_DATA_API = `${API_URL}/patients`;
const GET_PATIENT_DETAILS_DATA_API = `${API_URL}/patients/{patientId}`;
const GET_DASHBOARD_REPORT = `${API_URL}/patients/dashboard`;
const UPLOAD_CSV_FILE_URL = `${API_URL}/patients/upload-csv`;
export {
  LOGIN_URL,
  SIGNUP_URL,
  GET_PATIENT_DATA_API,
  UPLOAD_CSV_FILE_URL,
  GET_PATIENT_DETAILS_DATA_API,
  GET_DASHBOARD_REPORT,
};
