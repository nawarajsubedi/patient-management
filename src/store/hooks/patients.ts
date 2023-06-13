import { useSelector } from "react-redux";
import { RootState } from "..";
import { useMemo } from "react";

export const usePatientData = () => {
  const { error, status, data } = useSelector((state: RootState) => {
    return {
      error: state.patients.error,
      data: state.patients.data,
      status: state.patients.status,
    };
  });

  const {
    error: errorData,
    status: statusData,
    data: patientData,
  } = useMemo(() => {
    return { error, status, data };
  }, [error, data, status]);

  return { error: errorData, status: statusData, data: patientData };
};
