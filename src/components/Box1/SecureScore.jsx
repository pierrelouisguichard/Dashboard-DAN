import React, { useEffect, useState } from "react";
import Header from "../other/Header";
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
import { loginRequest } from "../../API/authConfig";
import { useMsal } from "@azure/msal-react";
import { fetchSecureScoreData } from "../../API/graph";

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
  const { instance, accounts } = useMsal();
  const [secureScore, setSecureScore] = useState([]);
  const [percentage, setPercentage] = useState(null); // State for storing the percentage

  // Fetch Secure Score data
  useEffect(() => {
    const fetchData = async () => {
      if (accounts.length > 0) {
        try {
          // Acquire the access token silently
          const response = await instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0],
          });

          // Fetch secure score data using the access token
          const data = await fetchSecureScoreData(response.accessToken);
          console.log("Fetched secure score data:", data); // Log the data
          setSecureScore(data || []);

          // Safely calculate percentage (same as before)
          const secureScoreValue = data?.value || [];
          const latestScore = secureScoreValue[0] || {};
          const currentScore = latestScore.currentScore || 0;
          const maxScore = latestScore.maxScore || 1; // Avoid division by zero
          const scorePercentage = (currentScore / maxScore) * 100;

          // Update percentage state
          setPercentage(scorePercentage.toFixed(0)); // Update the percentage state
        } catch (error) {
          console.error("Error fetching secure score data", error);
        }
      }
    };

    fetchData();
  }, [accounts, instance]);

  // Safely access values from secureScore
  const secureScoreValue = secureScore?.value || [];
  const latestScore = secureScoreValue[10] || {};
  const currentScore = latestScore.currentScore || 0;
  const maxScore = latestScore.maxScore || 1; // Avoid division by zero
  const scorePercentage = (currentScore / maxScore) * 100;

  const data = {
    // Generate labels with 80, "", "", "", 40, "", "", "", 0
    labels: Array.from({ length: 9 }, (_, index) => {
      if (index === 0) {
        const entry = secureScoreValue[80]; // First label at index 80
        return entry?.createdDateTime
          ? new Date(entry.createdDateTime).toLocaleString("en-US", {
              month: "short",
            })
          : "80"; // Fallback to 80 if no date is available
      } else if (index === 4) {
        const entry = secureScoreValue[40]; // Label at index 40
        return entry?.createdDateTime
          ? new Date(entry.createdDateTime).toLocaleString("en-US", {
              month: "short",
            })
          : "40"; // Fallback to 40 if no date is available
      } else if (index === 8) {
        const entry = secureScoreValue[0]; // Label at index 0
        return entry?.createdDateTime
          ? new Date(entry.createdDateTime).toLocaleString("en-US", {
              month: "short",
            })
          : "0"; // Fallback to 0 if no date is available
      } else {
        return ""; // Empty label for other indices
      }
    }),

    datasets: [
      {
        label: "Secure Score Over Time",
        // Select data for the same intervals (indices 80, 70, ..., 0)
        data: Array.from({ length: 9 }, (_, index) => {
          const reverseIndex = 80 - index * 10; // Reverse the index order
          const entry = secureScoreValue[reverseIndex]; // Access data in reverse
          return entry && entry.currentScore && entry.maxScore
            ? (entry.currentScore / entry.maxScore) * 100
            : 0;
        }),
        fill: false,
        borderColor: "#186e98", // Line color
        tension: 0.3, // Smooth the line
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

  // Calculate percentage change safely
  const previousScore = secureScoreValue[40]?.currentScore || 0;
  const percentageChange = (
    scorePercentage - (previousScore / maxScore) * 100 || 0
  ).toFixed(0);

  return (
    <Container>
      <Header
        text={
          <>
            <p>
              Microsoft Secure Score helps track and improve security by
              monitoring adherence to best practices in Microsoft 365.
            </p>
            <ul
              style={{
                padding: "0",
                margin: "0",
                listStylePosition: "inside",
              }}
            >
              <li>Displays the current Secure Score.</li>
              <li>
                Includes a line chart showing changes over the past three
                months.
              </li>
              <li>Compares score to similar-sized organizations.</li>
              <li>Highlights score increases or decreases over time.</li>
            </ul>
          </>
        }
        title="Microsoft Secure Score"
      />
      <YellowBox>
        <Grid>
          <Box>
            <LeftItem>
              {percentage ? `${percentage}%` : "Loading..."} <br />
              <Other>Organizations of a similar size: 48%</Other>
            </LeftItem>
            <RightItem percentageChange={percentageChange}>
              {percentageChange >= 0
                ? `+${percentageChange}%`
                : `${percentageChange}%`}
            </RightItem>
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
  color: ${({ percentageChange }) =>
    percentageChange > 0
      ? "#00d700" // Green if positive
      : percentageChange < 0
      ? "#ff0000" // Red if negative
      : "#d6d6d6"}; // Grey if 0
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
