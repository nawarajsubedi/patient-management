const API_URL = process.env.REACT_APP_API_URL;

const LOGIN_URL = `${API_URL}/login`;
const SIGNUP_URL = `${API_URL}/signup`;
const GET_PATIENT_DATA_API = `${API_URL}/patients`;
const UPLOAD_CSV_FILE_URL = `${API_URL}/patients/upload-csv`;
export { LOGIN_URL, SIGNUP_URL, GET_PATIENT_DATA_API, UPLOAD_CSV_FILE_URL };
