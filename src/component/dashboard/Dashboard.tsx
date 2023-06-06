import Layout from "../../layout";
import { Helmet } from "react-helmet";
import { Box, Container, Stack, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Patient List | Patient Management</title>
      </Helmet>
      <Layout>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth="xl">
            <Stack spacing={3}>
              <Stack direction="row" justifyContent="space-between" spacing={4}>
                <Stack spacing={1}>
                  <Typography variant="h4">Dashboard</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default Dashboard;
