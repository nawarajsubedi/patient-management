import PropTypes from "prop-types";
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

const getInitials = (name = "") =>
  name
    .replace(/\s+/, " ")
    .split(" ")
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join("");

type Props = {
  count?: number;
  items: any[]; // Replace 'any' with the specific type of your items array
  onDeselectAll?: () => void;
  onDeselectOne?: (index: number) => void; // Replace 'number' with the appropriate type of index
  onPageChange?: (page: number) => void; // Replace 'number' with the appropriate type of page
  onRowsPerPageChange?: (rowsPerPage: number) => void; // Replace 'number' with the appropriate type of rowsPerPage
  onSelectAll?: () => void;
  onSelectOne?: (index: number) => void; // Replace 'number' with the appropriate type of index
  page?: number;
  rowsPerPage?: number;
  selected?: any[]; // Replace 'any' with the specific type of your selected items array
};
export const PatientTable = ({
  count,
  items,
  onDeselectAll,
  onDeselectOne,
  onPageChange,
  onRowsPerPageChange,
  onSelectAll,
  onSelectOne,
  page,
  rowsPerPage,
  selected,
}: Props) => {
  const selectedSome =
    selected && selected.length > 0 && selected.length < (items?.length ?? 0);
  const selectedAll =
    selected &&
    (items?.length ?? 0) > 0 &&
    selected.length === (items?.length ?? 0);

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      if (event.target.checked) {
                        onSelectAll?.();
                      } else {
                        onDeselectAll?.();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Signed Up</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((patient) => {
                const isSelected = selected && selected.includes(patient.id);
                const createdAt = format(patient.createdAt, "dd/MM/yyyy");

                return (
                  <TableRow hover key={patient.id} selected={isSelected}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(patient.id);
                          } else {
                            onDeselectOne?.(patient.id);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <Avatar src={patient.avatar}>
                          {getInitials(patient.name)}
                        </Avatar>
                        <Typography variant="subtitle2">
                          {patient.name}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{patient.email}</TableCell>
                    <TableCell>
                      {patient.address.city}, {patient.address.state},{" "}
                      {patient.address.country}
                    </TableCell>
                    <TableCell>{patient.phone}</TableCell>
                    <TableCell>{createdAt}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      {/* <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      /> */}
    </Card>
  );
};
