import { Box, Link, Stack, Typography } from "@mui/material";
import Helmet from "react-helmet";
import SignupForm from "./SignupForm";

const SignupPage = () => {
  return (
    <>
      <Helmet>
        <title>Registration | Patient Management</title>
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
              <Typography variant="h4">Registration</Typography>
              <Typography color="text.secondary" variant="body2">
                Already have an account? &nbsp;
                <Link
                  component={Link}
                  href="/login"
                  underline="hover"
                  variant="subtitle2"
                >
                  Login
                </Link>
              </Typography>
            </Stack>
            <SignupForm />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default SignupPage;
