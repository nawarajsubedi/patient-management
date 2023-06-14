import { format } from "date-fns";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { Scrollbar } from "../../../ui-utils/scrollbar";
import React from "react";
import { Patient } from "../../../store/thunks/patient";

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
  // onDeselectAll?: () => void;
  // onDeselectOne: (index: string) => void;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void;
  // onRowsPerPageChange?: (rowsPerPage: number) => void;
  onRowsPerPageChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  // onSelectAll?: () => void;
  // onSelectOne?: (index: string) => void;
  page: number;
  rowsPerPage: number;
  // selected: any[];
};
export const PatientTable = ({
  count,
  items,
  // onDeselectAll,
  // onDeselectOne,
  onPageChange,
  onRowsPerPageChange,
  // onSelectAll,
  // onSelectOne,
  page,
  rowsPerPage,
}: // selected,
Props) => {
  // const selectedSome =
  //   selected && selected.length > 0 && selected.length < (items?.length ?? 0);
  // const selectedAll =
  //   selected &&
  //   (items?.length ?? 0) > 0 &&
  //   selected.length === (items?.length ?? 0);

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
                <TableCell>Created at</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((patient) => {
                // const isSelected = selected && selected.includes(patient.ssn);
                const createdAt = format(new Date(), "dd/MM/yyyy");
                const patientName = `${patient.firstName} ${patient.lastName}`;
                return (
                  <TableRow hover key={patient.ssn}>
                    <TableCell>
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <Avatar src={patient.lastName}>
                          {getInitials(patientName)}
                        </Avatar>
                        <Typography variant="subtitle2">
                          {patientName}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{patient.ssn}</TableCell>
                    <TableCell>{patient.email}</TableCell>
                    <TableCell>
                      {patient.address1}, {patient.country}
                    </TableCell>
                    <TableCell>{patient.number1}</TableCell>
                    <TableCell>{createdAt}</TableCell>
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
          // page={page}
          page={!count || count <= 0 ? 0 : page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Scrollbar>
    </Card>
  );
};
