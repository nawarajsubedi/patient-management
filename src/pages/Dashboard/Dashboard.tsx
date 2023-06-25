import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Box, Container, Grid, Typography } from "@mui/material";

import Layout from "../../component/layout";
import { getDashboardReport } from "../../store/thunks/patient";
import { useDashboardData } from "../../store/hooks/patients";
import { TotalObservationsCard } from "./components/TotalObservations";
import { TotalPatients } from "./components/TotalPatients";
import { TotalPractitioners } from "./components/TotalPractitioners";
import { TotalNurses } from "./components/TotalNurses";
import { PractitionerByPatientChart } from "./components/PractitionerByPatientChart";
import { NurseByPatientChart } from "./components/NurseByPatientChart";
import { MedicationByPatientChart } from "./components/MedicationByPatientChart";
import { PatientSummaryTable } from "./components/PatientSummaryTable";

const DashboardPage = () => {
  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(getDashboardReport({}));
  }, [dispatch]);

  const { data, error, status } = useDashboardData();

  // console.log("data---------------", data);
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
          <Container maxWidth="xl">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} lg={3}>
                <TotalPatients
                  sx={{ height: "100%", marginRight: "16px" }}
                  value={data.patientCount}
                  title="Total Patients"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <TotalPractitioners
                  sx={{ height: "100%", marginRight: "16px" }}
                  value={data.practitionerCount}
                  title="Total Practitioners"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <TotalNurses
                  sx={{ height: "100%", marginRight: "16px" }}
                  value={data.nurseCount}
                  title="Total Nurses"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <TotalObservationsCard
                  sx={{ height: "100%" }}
                  value={data.observationCount}
                  title="Total Observations"
                />
              </Grid>

              <Box
                sx={{
                  display: "flex",
                  margin: "16px 16px 0 0",
                  gap: "16px",
                  width: "100%",
                }}
              >
                <Grid item xs={12} lg={8} sx={{ width: "60%" }}>
                  <PractitionerByPatientChart
                    data-testid="bar-chart"
                    data={data.practitionerByPatient}
                  />
                </Grid>

                <Grid item xs={12} md={12} lg={8} sx={{ width: "40%" }}>
                  <PatientSummaryTable
                    data={data.patients}
                    title="Patients with Last Observation"
                    showLastObservation
                    sx={{ height: "100%" }}
                  />
                </Grid>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  margin: "16px 16px 0 0",
                  gap: "16px",
                  width: "100%",
                }}
              >
                <Grid item xs={12} lg={8} sx={{ margin: "16px 16px 0 0" }}>
                  <NurseByPatientChart data={data.nurseByPatient} />
                </Grid>

                <Grid item xs={12} lg={8} sx={{ margin: "16px 16px 0 0" }}>
                  <MedicationByPatientChart data={data.medicationByPatient} />
                </Grid>
              </Box>

              <Grid
                item
                xs={12}
                md={12}
                lg={8}
                sx={{ margin: "16px 16px 0 0" }}
              >
                <PatientSummaryTable
                  data={data.patients}
                  title="Patients with Last Medication"
                  showLastMedication
                  sx={{ height: "100%" }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default DashboardPage;
