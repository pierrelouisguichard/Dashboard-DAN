import React from "react";
import Header from "../other/Header";
import styled from "styled-components";
import GaugeComponent from "react-gauge-component";
import SecureScore from "./SecureScore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { avatarClasses } from "@mui/material";

function OverallScore() {
  const data = [
    { value: 67, label: "MS Secure Score" },
    { value: 57, label: "EVS" },
    { value: 95, label: "IVS" },
    { value: 100, label: "Encryption" },
    { value: 100, label: "Antivirus" },
    { value: 88, label: "Patching" },
  ];

  const average = Math.round(
    data.reduce((sum, item) => sum + item.value, 0) / data.length
  );

  return (
    <Container>
      <Header
        icon={<FontAwesomeIcon icon={faChartSimple} />}
        title={"Overall Cyber Posture Score"}
      />
      <YellowBox>
        <Gauge>
          <GaugeComponent
            type="semicircle"
            arc={{
              colorArray: ["#FF2121", "#05d316"],
              padding: 0.02,
              subArcs: [
                { limit: 40 },
                { limit: 60 },
                { limit: 70 },
                {},
                {},
                {},
                {},
              ],
            }}
            pointer={{
              type: "blob",
              animationDelay: 0,
            }}
            value={85}
            labels={{
              valueLabel: {
                style: {
                  textShadow: "none",
                },
              },
              tickLabels: {
                hideMinMax: true,
              },
            }}
          />
        </Gauge>
        <StyledDiv>{average}%</StyledDiv>
      </YellowBox>
      <Box>
        {data.map((item, index) => (
          <GridItem key={index}>
            <Num>{item.value}%</Num>
            <Label>{item.label}</Label>
          </GridItem>
        ))}
      </Box>
    </Container>
  );
}

export default OverallScore;

const Box = styled.div`
  padding: 0 20px 10px 20px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  grid-template-rows: repeat(2, 1fr); /* 2 rows */
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
`;

const Num = styled.div`
  color: #186e98;
`;
const Label = styled.div`
  font-size: 1rem;
  font-weight: normal;
  color: #95bed2;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const StyledDiv = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: #186e98;
  position: absolute;
  top: 55%; /* Adjust this based on where you want the text */
  left: 50%;
  transform: translateX(-50%); /* Centers the text horizontally */
  z-index: 10;
`;

const Gauge = styled.div`
  width: 100%;
`;

const YellowBox = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; /* Enables absolute positioning inside this container */
`;
