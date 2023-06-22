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
  TableRow,
  Theme,
} from "@mui/material";
import { Patient } from "../../../store/thunks/patient";
import { Scrollbar } from "../../../ui-utils/scrollbar";
import { getFullname } from "../../../common/utils";
import { useNavigate } from "react-router-dom";

type Props = {
  data: Patient[];
  title: string;
  showLastMedication?: boolean;
  showLastObservation?: boolean;
  sx?: SxProps<Theme> | undefined;
};

export const PatientSummaryTable = ({
  data,
  title,
  showLastMedication,
  showLastObservation,
  sx,
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
                {showLastObservation && (
                  <TableCell>Last Observation Date</TableCell>
                )}
                {showLastMedication && <TableCell>Last Medication</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((patient) => {
                const lastObservation = format(
                  new Date(patient.createdAt),
                  "dd/MM/yyyy"
                );
                const fullname = getFullname(patient);
                const lastMedication =
                  patient.observation[0].medication.medication_name;

                return (
                  <TableRow hover key={patient.patient_ssn}>
                    <TableCell>{patient.patient_ssn}</TableCell>
                    <TableCell>{fullname}</TableCell>
                    {showLastObservation && (
                      <TableCell>{lastObservation}</TableCell>
                    )}
                    {showLastMedication && (
                      <TableCell>{lastMedication}</TableCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
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
      </CardActions>
    </Card>
  );
};
