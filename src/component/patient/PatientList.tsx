import { useEffect, useState } from "react";
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
import { getPatientList } from "../../store/thunks/patient";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { usePatientData } from "../../store/hook";
import { useDispatch } from "react-redux";

const PatientListPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(getPatientList(page));
  }, [dispatch, page]);

  const { data, error, status } = usePatientData();

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
                count={data.length}
                items={data}
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
