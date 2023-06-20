import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import Dashboard from "../pages/Dashboard/Dashboard";
import LoginPage from "../pages/Login";
import SignupPage from "../pages/Signup";
import PatientList from "../pages/Patients/PatientList";
import PatientDetailsPage from "../pages/Patients/PatientDetail";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/patients"
        element={
          <PrivateRoute>
            <PatientList />
          </PrivateRoute>
        }
      />
      <Route
        path="/patient-details/:patientId"
        element={
          <PrivateRoute>
            <PatientDetailsPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
