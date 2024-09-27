import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

const Spider = () => {
  const [chartData] = useState({
    series: [
      {
        name: "Target",
        data: [80, 60, 50, 70, 60, 80],
      },
      {
        name: "Current",
        data: [70, 50, 40, 40, 30, 60],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      //   title: {
      //     text: "Radar Chart - Multi Series",
      //   },
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
        stepSize: 20,
      },
      xaxis: {
        categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
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
  max-width: 500px; // Set a max width to avoid overflow
  max-height: 500px; // Set a max height to avoid overflow

  @media (max-width: 768px) {
    max-width: 100%; // On smaller screens, allow it to be full width
    max-height: 400px; // Adjust height for smaller screens
  }
`;
