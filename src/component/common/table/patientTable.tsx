import { format } from "date-fns";
import {
  Avatar,
  Box,
  Card,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import ViewIcon from "@heroicons/react/24/solid/EyeIcon";

import { Scrollbar } from "../../../ui-utils/scrollbar";
import React from "react";
import { Patient } from "../../../store/thunks/patient";
import { formatDate, getFullname } from "../../../common/utils";
import { Link } from "react-router-dom";

const getInitials = (name = "") =>
  name
    .replace(/\s+/, " ")
    .split(" ")
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join("");

type Props = {
  count: number;
  items: Patient[];
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void;
  onRowsPerPageChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  page: number;
  rowsPerPage: number;
};
export const PatientTable = ({
  count,
  items,
  onPageChange,
  onRowsPerPageChange,
  page,
  rowsPerPage,
}: Props) => {
  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>SSN</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Last Observation</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((patient) => {
                const lastObservation = formatDate(
                  patient.observation[0].observation_date
                );

                const patientName = getFullname(patient);
                return (
                  <TableRow hover key={patient.patient_ssn}>
                    <TableCell>
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <Avatar src={patient.patient_lastname}>
                          {getInitials(patientName)}
                        </Avatar>
                        <Typography variant="subtitle2">
                          {patientName}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{patient.patient_ssn}</TableCell>
                    <TableCell>{patient.patient_email}</TableCell>
                    <TableCell>
                      {patient.patient_address1}, {patient.patient_country}
                    </TableCell>
                    <TableCell>{patient.patient_number1}</TableCell>
                    <TableCell>{lastObservation}</TableCell>
                    <TableCell>
                      <Link to={`/patients/${patient.patient_ssn}`}>
                        <SvgIcon fontSize="small">
                          <ViewIcon />
                        </SvgIcon>
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
        <TablePagination
          component="div"
          count={count}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          page={page}
          // page={!count || count <= 0 ? 0 : page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Scrollbar>
    </Card>
  );
};
