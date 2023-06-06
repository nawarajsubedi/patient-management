import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import Layout from "../../layout";

import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";

import { PatientTable } from "../common/table/patientTable";
import { getPatientList } from "../../services/patient/patient-services";
import { Patient } from "../common/interface/Patient";

const PatientListPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [patientData, setPatientData] = useState<Patient[]>([]);

  const fetchData = async () => {
    const data = await getPatientList();
    setPatientData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const patients = useMemo(() => patientData, [patientData]);

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
                  <Typography variant="h4">Patients</Typography>
                  <Stack alignItems="center" direction="row" spacing={1}>
                    <Button
                      color="inherit"
                      startIcon={
                        <SvgIcon fontSize="small">
                          <ArrowUpOnSquareIcon />
                        </SvgIcon>
                      }
                    >
                      Import
                    </Button>
                    <Button
                      color="inherit"
                      startIcon={
                        <SvgIcon fontSize="small">
                          <ArrowDownOnSquareIcon />
                        </SvgIcon>
                      }
                    >
                      Export
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
              <PatientTable
                count={patients.length}
                items={patients}
                page={page}
                rowsPerPage={rowsPerPage}
              />
            </Stack>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default PatientListPage;
