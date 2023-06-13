import { Box, Link, Stack, Typography } from "@mui/material";
import Helmet from "react-helmet";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login | Patient Management</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Login</Typography>
              <Typography color="text.secondary" variant="body2">
                Don&apos;t have an account? &nbsp;
                <Link
                  component={Link}
                  href="/signup"
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography>
            </Stack>
            <LoginForm />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
