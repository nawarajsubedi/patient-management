import { useCallback, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { PatientDetails } from "../../../store/thunks/patient";
import { getGender } from "../../../common/utils";

const states = [
  {
    value: "alabama",
    label: "Alabama",
  },
  {
    value: "new-york",
    label: "New York",
  },
  {
    value: "san-francisco",
    label: "San Francisco",
  },
  {
    value: "los-angeles",
    label: "Los Angeles",
  },
];

type Props = {
  patientDetails: PatientDetails;
};
export const PatientProfileDetails = ({ patientDetails }: Props) => {
  // const [values, setValues] = useState({
  //   firstName: "Anika",
  //   lastName: "Visser",
  //   email: "demo@devias.io",
  //   phone: "",
  //   state: "los-angeles",
  //   country: "USA",
  // });

  const { patient } = patientDetails;

  // const handleChange = useCallback(
  //   (event: React.MouseEvent<HTMLButtonElement>) => {
  //     setValues((prevState) => ({
  //       ...prevState,
  //       [event.target.name]: event.target.value,
  //     }));
  //   },
  //   []
  // );

  // const handleSubmit = useCallback(
  //   (event: React.MouseEvent<HTMLButtonElement>) => {
  //     event.preventDefault();
  //   },
  //   []
  // );

  return (
    <form autoComplete="off" noValidate>
      <Card>
        <CardHeader title="Patient Profile" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="First name"
                  name="firstName"
                  required
                  value={patient?.patient_firstname || ""}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  required
                  value={patient?.patient_lastname || ""}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  required
                  value={patient?.patient_email || ""}
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  required
                  value={patient?.patient_country || ""}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Address 1"
                  name="address1"
                  value={patient?.patient_address1 || ""}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Address 2"
                  name="address2"
                  value={patient?.patient_address2 || ""}
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Patient Number 1"
                  name="patientNumber1"
                  value={patient?.patient_number1 || ""}
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Gender"
                  name="gender"
                  value={getGender(patient?.patient_sex)}
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Blood Group"
                  name="bloodGroup"
                  value={patient?.patient_bloodtype || ""}
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="weight (Kg)"
                  name="weight"
                  value={patient?.patient_weight || ""}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        {/* <Divider /> */}
        {/* <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained">Save details</Button>
        </CardActions> */}
      </Card>
    </form>
  );
};
