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
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [50, 59, 80, 81, 56, 55, 40],
      },

      {
        label: "My second dataset",
        backgroundColor: "rgba(155,231,91,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [10, 79, 50, 41, 16, 85, 20],
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
  return <Chart type="bar" data={data} options={options} />;
};
