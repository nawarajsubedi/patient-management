import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import Layout from "../../component/layout";
import { getPatientDetails } from "../../store/thunks/patient";
import { usePatientDetails } from "../../store/hooks/patients";
import { PatientProfile } from "./components/PatientProfile";
import { PatientProfileDetails } from "./components/PatientProfileDetails";
import { getFullname } from "../../common/utils";
import { MedicationLevelChart } from "./components/MedicationLevelChart";

const PatientDetailsPage = () => {
  const { patientId } = useParams();
  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(getPatientDetails({ patientId: patientId ?? "" }));
  }, [dispatch, patientId]);

  const { data, error, status } = usePatientDetails();

  console.log("data", data);
  return (
    <>
      <Helmet>
        <title>Patient details | Patient Management</title>
      </Helmet>
      <Layout>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth="lg">
            <Stack spacing={3}>
              <div>
                <Typography variant="h4" sx={{ mb: "16px" }}>
                  {getFullname(data.patient)}{" "}
                </Typography>
              </div>
              <div>
                <Grid container spacing={3}>
                  <Grid xs={12} md={6} lg={4}>
                    <PatientProfile patientDetails={data} />
                  </Grid>

                  <Grid xs={12} md={6} lg={8}>
                    <PatientProfileDetails patientDetails={data} />
                  </Grid>

                  <Grid xs={12} md={6} lg={8} sx={{ mt: "16px" }}>
                    <MedicationLevelChart patientDetails={data} />
                  </Grid>
                </Grid>
              </div>
            </Stack>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default PatientDetailsPage;
