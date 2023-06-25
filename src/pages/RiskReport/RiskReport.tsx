import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Box, Container, Grid, Typography } from "@mui/material";

import Layout from "../../component/layout";
import {
  getDashboardReport,
  getHighRiskReport,
} from "../../store/thunks/patient";
import { useHighRiskReportData } from "../../store/hooks/patients";
import { TotalObservationsCard } from "./components/TotalObservations";
import { TotalPatients } from "./components/TotalPatients";
import { TotalPractitioners } from "./components/TotalPractitioners";
import { TotalNurses } from "./components/TotalNurses";
import { PractitionerByPatientChart } from "./components/PractitionerByPatientChart";
import { NurseByPatientChart } from "./components/NurseByPatientChart";
import { MedicationByPatientChart } from "./components/MedicationByPatientChart";
import { HighRiskPatientTable } from "./components/HighRiskPatients";
import { HighRiskObservations } from "./components/HighRiskObservations";

const RiskReportPage = () => {
  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(getHighRiskReport({}));
  }, [dispatch]);

  const { data, error, status } = useHighRiskReportData();

  // console.log("data---------------", data);
  return (
    <>
      <Helmet>
        <title>Risk Report | Patient Management</title>
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
              <Grid item xs={12} md={12} lg={8}>
                <HighRiskPatientTable
                  data={data.highRiskPatients}
                  title="Patients with High Risk Observation"
                  showLastObservation
                  sx={{ height: "100%" }}
                  onPageChange={() => {}}
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
                <Grid item xs={12} lg={8} sx={{ margin: "16px 16px 0 0" }}>
                  <HighRiskObservations
                    data={data.observations}
                    title="Observation covered by practitioners or nurses after checkout"
                    showLastObservation
                    sx={{ height: "100%" }}
                    onPageChange={() => {}}
                  />
                </Grid>
                {/* 
                <Grid item xs={12} lg={8} sx={{ margin: "16px 16px 0 0" }}>
                  <MedicationByPatientChart data={data.medicationByPatient} />
                </Grid> */}
              </Box>

              {/* <Grid
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
              </Grid> */}
            </Grid>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default RiskReportPage;
