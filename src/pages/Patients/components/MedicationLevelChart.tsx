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
import {
  Chart as ChartJS,
  registerables,
  ChartOptions,
  ScaleOptionsByType,
} from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);

type Props = {
  patientDetails?: PatientDetails;
};
export const MedicationLevelChart = ({ patientDetails }: Props) => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "Medication level",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [6.6, 6, 5, 4, 2, 3, 1],
      },

      {
        label: "Medication level change",
        backgroundColor: "rgba(155,231,91,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [0, 0, 0, 3, 2, 1, 0],
      },
    ],
  };
  const options = {
    responsive: true,
    legend: {
      display: false,
    },
    type: "bar",
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  } as ChartOptions<"bar">;
  return (
    <Card>
      <CardHeader title="Medication-Intake-Level in last 1 year" />
      <CardContent>
        <Box>
          <Chart type="bar" data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};
