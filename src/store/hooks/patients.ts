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

export const usePatientDetails = () => {
  const { error, status, data } = useSelector((state: RootState) => {
    return {
      error: state.patientDetails.error,
      data: state.patientDetails.data,
      status: state.patientDetails.status,
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

export const useDashboardData = () => {
  const { error, status, data } = useSelector((state: RootState) => {
    return {
      error: state.dashboardReport.error,
      data: state.dashboardReport.data,
      status: state.dashboardReport.status,
    };
  });

  const {
    error: errorData,
    status: statusData,
    data: dashboardData,
  } = useMemo(() => {
    return { error, status, data };
  }, [error, data, status]);

  return { error: errorData, status: statusData, data: dashboardData };
};

export const useHighRiskReportData = () => {
  const { error, status, data } = useSelector((state: RootState) => {
    return {
      error: state.highRiskReport.error,
      data: state.highRiskReport.data,
      status: state.highRiskReport.status,
    };
  });

  const {
    error: errorData,
    status: statusData,
    data: highRiskReport,
  } = useMemo(() => {
    return { error, status, data };
  }, [error, data, status]);

  return { error: errorData, status: statusData, data: highRiskReport };
};
