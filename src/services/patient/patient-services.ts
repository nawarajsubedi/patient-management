import { AuthResponse } from "../../component/common/interface/AuthResponse";
import { User } from "../../component/common/interface/User";
import { setAuthToken } from "../../store/utils";
const BASE_URL = "http://localhost:8080";

export const getPatientList = async () => {
  const result = await fetch(`${BASE_URL}/patients`, {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });

  const data = await result.json();
  return data.patients;
};
