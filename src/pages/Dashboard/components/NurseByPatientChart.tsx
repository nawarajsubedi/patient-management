import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { BarChartData } from "../../../store/thunks/patient";
import { Chart as ChartJS, registerables, ChartOptions } from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);

type Props = {
  data: BarChartData;
};
export const NurseByPatientChart = ({ data }: Props) => {
  const chartData = {
    labels: [...data.names],
    datasets: [
      {
        label: "No of patients",
        backgroundColor: "rgb(99, 102, 241)",
        borderColor: "rgba(99, 102, 241, 0.25)",
        borderWidth: 1,
        hoverBackgroundColor: "rgb(99, 102, 241)",
        hoverBorderColor: "rgba(99, 102, 241, 0.25)",
        data: [...data.counts],
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
        suggestedMin: 0,
        ticks: {
          precision: 0,
        },
      },
    },
  } as ChartOptions<"bar">;
  return (
    <Card>
      <CardHeader title="Nurse By Patient" />
      <CardContent>
        <Box>
          <Chart type="bar" data={chartData} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};
