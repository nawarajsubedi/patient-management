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
import {
  HighRiskPatient,
  Observation,
  Patient,
} from "../../../store/thunks/patient";
import { Scrollbar } from "../../../ui-utils/scrollbar";
import {
  booleanToYesNo,
  formatDate,
  formatTime,
  getFullname,
} from "../../../common/utils";
import { useNavigate } from "react-router-dom";

type Props = {
  data: Observation[];
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

export const HighRiskObservations = ({
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
                <TableCell>Observation Id</TableCell>
                <TableCell>Observation Date</TableCell>
                <TableCell>Observation Time</TableCell>
                <TableCell>observation Remark</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((observation) => {
                return (
                  <TableRow hover key={observation.observation_id}>
                    <TableCell>{observation.observation_id}</TableCell>
                    <TableCell>
                      {formatDate(observation.observation_date)}
                    </TableCell>
                    <TableCell>
                      {formatTime(observation.observation_time)}
                    </TableCell>
                    <TableCell>{observation.observation_remark}</TableCell>
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
