import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function SecureScore() {
  const data = {
    labels: ["Jan", "", "Mar", "", "May", "", "Jul", "", "Aug"],
    datasets: [
      {
        label: "Another Metric",
        data: [42, 43, 42, 43, 44, 44, 45, 46, 45],
        fill: false,
        borderColor: "#186e98", // Line color
        tension: 0.4, // Smooth the line
        pointRadius: 0, // Remove the points (circles)
        borderWidth: 2, // Line thickness
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Remove the legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical lines (x-axis grid lines)
        },
        ticks: {
          color: "#186e98", // Set x-axis label color
        },
      },
      y: {
        grid: {
          color: "#95bed2", // Optional: Set the color for horizontal lines
        },
        ticks: {
          color: "#186e98", // Set y-axis label color
          stepSize: 5, // Decrease step size to add more labels
        },
      },
    },
  };

  return (
    <Container>
      <Header text={"text"} title={"Secure Score"} />
      <YellowBox>
        <Grid>
          <Box>
            <LeftItem>
              46% <br />
              <Other>Organizations of a similar size: 48%</Other>
            </LeftItem>
            <RightItem>+3%</RightItem>
          </Box>
          <FullSpanBox>
            <Line data={data} options={options} />
          </FullSpanBox>
        </Grid>
      </YellowBox>
    </Container>
  );
}

export default SecureScore;

const Other = styled.div`
  font-size: 1rem;
  color: #95bed2;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const LeftItem = styled.div`
  font-size: 4rem;
  color: #186e98;
  font-weight: bold;
`;

const RightItem = styled.div`
  font-size: 2rem;
  padding-top: 22px;
  color: #00d700;
`;

const YellowBox = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column; /* Stack items vertically */
  height: 100%; /* Make the grid take 100% of YellowBox height */
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between; /* Pushes items to opposite ends */
  align-items: center; /* Align items vertically in the center */
  flex-grow: 1; /* Take up available height */
`;

const FullSpanBox = styled.div`
  color: black;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  flex-grow: 1; /* Take up remaining space */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
