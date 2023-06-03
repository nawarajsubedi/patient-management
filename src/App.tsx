import React from "react";
import LoginPage from "./component/auth/login";
import Registration from "./component/auth/registration";
import {
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  useLocation,
} from "react-router-dom";
import Dashboard from "./dashboard";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "./theme";
import { AuthProvider, useAuth } from "./context/auth-context";
import Login from "./testLogin";
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

// const App = () => {
//   const theme = createTheme();

//   return (
//     // <Router>
//     //   <AuthProvider>
//     //     <Switch>
//     //       <ProtectedRoute exact path="/" component={Dashboard} />
//     //       <Route path="/login" component={Login} />
//     //     </Switch>
//     //   </AuthProvider>
//     // </Router>
//     <ThemeProvider theme={theme}>
//       <RouterProvider router={router}></RouterProvider>
//     </ThemeProvider>
//   );
// };

// export default App;

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
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <MyRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

function PrivateRoute(props: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth?.isAuthenticated) {
    /** Redirect them to the /login page, but save the current location they were
    trying to go to when they were redirected. This allows us to send them
    along to that page after they login, which is a nicer user experience
    than dropping them off on the home page. */
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return props.children;
}

{
  /* <AuthProvider>
  <h1>My Todo List</h1>

  <p>A List of things to be done</p>

  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/todo"
        element={
          <PrivateRoute>
            <TodoList />
          </PrivateRoute>
        }
      />
    </Route>
  </Routes>
</AuthProvider>; */
}
