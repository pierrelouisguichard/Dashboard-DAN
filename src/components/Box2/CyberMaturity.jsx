import React from "react";
import Header from "../other/Header";
import styled from "styled-components";
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
import ChartDataLabels from "chartjs-plugin-datalabels";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartDataLabels // Register DataLabels Plugin
);

function CyberMaturity() {
  const data = {
    labels: [
      "Secure Score",
      "EVS",
      "IVS",
      "Encryption",
      "Antivirus",
      "Patching",
    ],
    datasets: [
      {
        label: "Vulnerability Score",
        data: [67, 57, 95, 100, 100, 88],
        backgroundColor: "rgba(255, 2, 137, 0.128)",
        borderColor: "#fc00b1",
        borderWidth: 2,
        tension: 0.1,
        pointRadius: 5, // Show points
        pointBackgroundColor: "#fc00b1",
      },
      {
        label: "Target Score",
        data: [75, 75, 100, 100, 100, 95],
        backgroundColor: "rgba(69, 224, 209, 0.106)",
        borderColor: "#079fd6",
        borderWidth: 2,
        tension: 0.1,
        pointRadius: 0, // Hide points for Target Score
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
          lineWidth: 1,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          display: true,
          maxTicksLimit: 10,
          stepSize: 10,
          color: "#186e98",
          font: {
            family: "Nunito",
          },
        },
        pointLabels: {
          font: {
            family: "Nunito",
            size: 14,
            weight: "bold",
          },
          color: "#186e98",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            family: "Nunito",
            size: 14,
            weight: "bold",
          },
          color: "#186e98",
        },
      },
      datalabels: {
        color: "#fc00b1", // Blue color for labels
        font: {
          weight: "bold",
          size: 14,
        },
        formatter: (value, context) => {
          return context.dataset.label === "Vulnerability Score" ? value : null;
        },
        anchor: "end",
        align: "top",
      },
    },
  };

  return (
    <Container>
      <Header
        title={"Cyber Maturity"}
        icon={<FontAwesomeIcon icon={faArrowTrendUp} />}
      />
      <YellowBox>
        <Radar data={data} options={options} />
      </YellowBox>
    </Container>
  );
}

export default CyberMaturity;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const YellowBox = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 85%;
`;
