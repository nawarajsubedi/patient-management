import { ThemeProvider } from "@emotion/react";
import { createTheme } from "./theme";
import { AuthProvider } from "./context/authContext";
import MainRoutes from "./route/MainRoutes";

const App = () => {
  const theme = createTheme();

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <MainRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
