import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";

import CSVUpload from "./CSVUpload";
import Layout from "../../component/layout";
import { getPatientList } from "../../store/thunks/patient";
import { PatientTable } from "../../component/common/table/patientTable";
import { usePatientData } from "../../store/hooks/patients";

const PatientListPage = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();

  const onPageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => {
    setPage(page);
  };

  const handleRowsPerPageChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { value } = event.target;
    const rowsPerPageValue = parseInt(value, 10);
    setRowsPerPage(rowsPerPageValue);
  };

  useEffect(() => {
    dispatch(getPatientList({ page, rowsPerPage }));
  }, [dispatch, page]);

  const { data, error, status } = usePatientData();

  console.log("page", page);
  console.log("rowsPerPage", rowsPerPage);
  console.log("count", data.length);
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
                <CSVUpload />
                {/* <div>
                  <Button
                    startIcon={
                      <SvgIcon fontSize="small">
                        <PlusIcon />
                      </SvgIcon>
                    }
                    variant="contained"
                  >
                    Add
                  </Button>
                </div> */}
              </Stack>
              <PatientTable
                count={data.length}
                items={data}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={onPageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
              />
            </Stack>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default PatientListPage;
