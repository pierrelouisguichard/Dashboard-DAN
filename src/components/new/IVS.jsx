import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import styled from "styled-components";

// Register chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function IVS() {
  const IVSVulnerabilities = (233 / 1152) * 100;
  const IVSCritical = (47 / 233) * 100;
  const IVSHigh = (173 / 233) * 100;
  const EVSVulnerabilities = 4;
  const EVSCritical = 0;
  const EVSHigh = 0;
  // Updated radar chart data with 6 labels and a second dataset
  const data = {
    labels: [
      "IVS - Vulnerabilities",
      "IVS - Critical",
      "IVS - High",
      "EVS - Vulnerabilities",
      "EVS - Critical",
      "EVS - High",
    ],
    datasets: [
      {
        label: "Vulnerability Score",
        data: [
          IVSVulnerabilities,
          IVSCritical,
          IVSHigh,
          EVSVulnerabilities,
          EVSCritical,
          EVSHigh,
        ], // Data for the first dataset
        backgroundColor: "rgba(255, 2, 137, 0.128)", // Yellow background
        borderColor: "#fc00b1", // Yellow border
        borderWidth: 2,
        tension: 0.1, // Smoother curve
        pointRadius: 0, // Remove dots
      },
      // {
      //   label: "Ideal Score",
      //   data: [90, 95, 85, 90, 85, 90], // Data for the second dataset
      //   backgroundColor: "rgba(69, 224, 209, 0.106)", // Green background
      //   borderColor: "#079fd6", // Green border
      //   borderWidth: 2,
      //   tension: 0.1, // Smoother curve
      //   pointRadius: 0, // Remove dots
      // },
    ],
  };

  // Options for the radar chart with customized labels
  const options = {
    scales: {
      r: {
        angleLines: {
          display: false, // Keep angle lines, just reduce their number
          lineWidth: 1, // Optional: reduce the width of the lines
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          display: true, // Show ticks
          maxTicksLimit: 10, // Limit the number of ticks (lines) on the radar
          stepSize: 10, // Optional: control the spacing between the ticks
          color: "#186e98",
          font: {
            family: "Nunito", // Set font family for labels
          },
        },
        pointLabels: {
          font: {
            family: "Nunito", // Set font family for labels
            size: 14, // Optional: set font size
            weight: "bold", // Optional: set font weight
          },
          color: "#186e98", // Set label color
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom", // Move the legend to the bottom of the chart
        labels: {
          font: {
            family: "Nunito", // Set font family for legend labels
            size: 14, // Optional: set font size for legend
            weight: "bold", // Optional: set font weight for legend
          },
          color: "#186e98", // Set legend label color
        },
      },
    },
  };

  return (
    <YellowBox>
      <Radar data={data} options={options} />
    </YellowBox>
  );
}

export default IVS;

const YellowBox = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 99%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
