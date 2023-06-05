import { Route, Routes } from "react-router-dom";
import LoginPage from "../component/auth/Login";
import SignupPage from "../component/auth/Signup";
import PrivateRoute from "./PrivateRoutes";
import Dashboard from "../component/dashboard/Dashboard";
import PatientList from "../component/patient/PatientList";

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
    </Routes>
  );
};

export default MainRoutes;