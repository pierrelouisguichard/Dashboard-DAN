import React from "react";
import Header from "./Header";
import styled from "styled-components";
import GaugeComponent from "react-gauge-component";
import SecureScore from "./SecureScore";

function OverallScore() {
  return (
    <Container>
      <Header
        text={
          <>
            <p>
              The Overall Score component provides a security score calculated
              from various factors, such as Microsoft Secure Score, encryption
              and antivirus coverage, phishing campaign results, and
              vulnerability management.
            </p>
            <ul
              style={{
                padding: "0",
                margin: "0",
                listStylePosition: "inside",
              }}
            >
              <li>
                Shows a combined security score based on multiple security
                factors.
              </li>
              <li>
                Includes metrics like encrypted devices, antivirus coverage,
                phishing results, and vulnerability management.
              </li>
              <li>
                Offers a unified view of the organization’s overall security
                posture.
              </li>
            </ul>
          </>
        }
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
        <StyledDiv>85%</StyledDiv>
      </YellowBox>
      <Box></Box>
    </Container>
  );
}

export default OverallScore;

const Container = styled.div`
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const StyledDiv = styled.div`
  /* background-color: yellow; */
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
  /* background-color: purple; */
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  background-color: purple;
`;

const YellowBox = styled.div`
  /* background-color: blue; */
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; /* Enables absolute positioning inside this container */
`;
