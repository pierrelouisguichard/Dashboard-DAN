import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

const Spider = () => {
  const [chartData] = useState({
    series: [
      {
        name: "Target Level",
        data: [80, 70, 90, 75, 85, 95],
      },
      {
        name: "Current Level",
        data: [65, 55, 75, 50, 60, 70],
      },
    ],
    options: {
      chart: {
        height: 700, // Increased height
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      title: {
        text: "Cybersecurity Metrics Radar Chart",
        align: "center",
        style: {
          fontSize: "20px",
          fontWeight: "bold",
        },
      },
      stroke: {
        width: 2,
      },
      fill: {
        opacity: 0.1,
      },
      markers: {
        size: 0,
      },
      yaxis: {
        title: {
          text: "Percentage",
          style: {
            fontSize: "18px",
          },
        },
        labels: {
          style: {
            fontSize: "18px",
          },
        },
        tickAmount: 5,
        min: 0,
        max: 100,
      },
      xaxis: {
        categories: [
          "Malware Protection",
          "Phishing Awareness",
          "System Updates",
          "Incident Response",
          "Data Encryption",
          "Access Control",
        ],
        labels: {
          style: {
            fontSize: "18px",
          },
        },
      },
    },
  });

  return (
    <ChartContainer>
      <ResponsiveChart>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="radar"
          width="100%"
          height="100%"
        />
      </ResponsiveChart>
    </ChartContainer>
  );
};

export default Spider;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ResponsiveChart = styled.div`
  width: 100%;
  height: 100%;
  max-width: 700px; // Increased max width
  max-height: 700px; // Increased max height

  @media (max-width: 768px) {
    max-width: 100%; // On smaller screens, allow it to be full width
    max-height: 500px; // Adjust height for smaller screens
  }
`;
