import { ThemeProvider } from "@emotion/react";
import createTheme from "./theme/createTheme";
import MainRoutes from "./route/MainRoutes";

const App = () => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <MainRoutes />
    </ThemeProvider>
  );
};

export default App;
