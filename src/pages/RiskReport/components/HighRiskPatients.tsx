import { format } from "date-fns";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Theme,
} from "@mui/material";
import { HighRiskPatient, Patient } from "../../../store/thunks/patient";
import { Scrollbar } from "../../../ui-utils/scrollbar";
import { booleanToYesNo, getFullname } from "../../../common/utils";
import { useNavigate } from "react-router-dom";

type Props = {
  data: HighRiskPatient[];
  title: string;
  showLastMedication?: boolean;
  showLastObservation?: boolean;
  sx?: SxProps<Theme> | undefined;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void;
  onRowsPerPageChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  page?: number;
  rowsPerPage?: number;
};

export const HighRiskPatientTable = ({
  data,
  title,
  showLastMedication,
  showLastObservation,
  sx,
  onPageChange,
  onRowsPerPageChange,
}: Props) => {
  const navigate = useNavigate();

  return (
    <Card className="patient-summary-table">
      <CardHeader title={title} />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Patient SSN</TableCell>
                <TableCell>Patient Name</TableCell>
                <TableCell>Patient Email</TableCell>
                <TableCell>Is More than 10 observation</TableCell>
                <TableCell>Is More than 5 Practitioners visited</TableCell>
                <TableCell>Is More than 3 Hospital Visited</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((patient) => {
                const fullname = getFullname(patient);
                return (
                  <TableRow hover key={patient.patient_ssn}>
                    <TableCell>{patient.patient_ssn}</TableCell>
                    <TableCell>{fullname}</TableCell>
                    <TableCell>{patient.patient_email}</TableCell>
                    <TableCell>
                      {booleanToYesNo(patient.is_criteria_observation)}
                    </TableCell>
                    <TableCell>
                      {booleanToYesNo(patient.is_criteria_practitioner_visited)}
                    </TableCell>
                    <TableCell>
                      {booleanToYesNo(patient.is_criteria_hospital_visited)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
        <TablePagination
          component="div"
          count={10}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          page={1}
          // page={!count || count <= 0 ? 0 : page}
          rowsPerPage={1}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Scrollbar>
      <Divider />
      {/* <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          onClick={() => {
            navigate("/patients");
          }}
          color="inherit"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions> */}
    </Card>
  );
};
