import React from "react";
import LoginPage from "./component/auth/login";
import Registration from "./component/auth/registration";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./dashboard";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "./theme";
// import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <Registration /> },
  { path: "/dashboard", element: <Dashboard /> },
]);

const App = () => {
  const theme = createTheme();

  return (
    // <Router>
    //   <AuthProvider>
    //     <Switch>
    //       <ProtectedRoute exact path="/" component={Dashboard} />
    //       <Route path="/login" component={Login} />
    //     </Switch>
    //   </AuthProvider>
    // </Router>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
};

export default App;
