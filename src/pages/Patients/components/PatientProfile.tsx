import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { PatientDetails } from "../../../store/thunks/patient";
import { getFullname } from "../../../common/utils";

const user = {
  avatar: "/assets/avatars/avatar-anika-visser.png",
  city: "Los Angeles",
  country: "USA",
  jobTitle: "Senior Developer",
  name: "Anika Visser",
  timezone: "GTM-7",
};

type Props = {
  patientDetails: PatientDetails;
};
export const PatientProfile = ({ patientDetails }: Props) => (
  <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 80,
            mb: 2,
            width: 80,
          }}
        />
        <Typography gutterBottom variant="h5">
          {getFullname(patientDetails.patient)}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {patientDetails.patient?.patient_email}
        </Typography>
        <Divider sx={{ width: "100%", margin: "8px 0 4px 0" }} />
        <Box
          sx={{
            marginTop: "4px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">
            {patientDetails.observations?.length}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Total observations
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);
