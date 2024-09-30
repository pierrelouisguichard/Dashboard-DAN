import React from "react";
import Item from "./Item";
import Gauge from "./Gauge";
import styled from "styled-components";
import Title from "./Title";

function Item1() {
  return (
    <Item colSpan={1} rowSpan={2}>
      <Container>
        <Title text="Cyber Security Posture Status" />
        <GaugeContainer>
          <Gauge value={65} />
        </GaugeContainer>
        <ScoresContainer>
          <ScoreCard>
            <ScoreTitle>Encryption Score:</ScoreTitle>
            <ScoreValue>100%</ScoreValue>
          </ScoreCard>
          <ScoreCard>
            <ScoreTitle>Anti-virus Score:</ScoreTitle>
            <ScoreValue>100%</ScoreValue>
          </ScoreCard>
          <ScoreCard>
            <ScoreTitle>Patching Score:</ScoreTitle>
            <ScoreValue>100%</ScoreValue>
          </ScoreCard>
        </ScoresContainer>
      </Container>
    </Item>
  );
}

export default Item1;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Ensure title stays at the top */
  width: 100%;
  height: 100%;
`;

const GaugeContainer = styled.div`
  display: flex;
  justify-content: center; /* Center gauge horizontally */
  align-items: center; /* Center gauge vertically if needed */
  width: 100%;
  margin-top: 16px; /* Space between title and gauge */
`;

const ScoresContainer = styled.div`
  display: flex;
  justify-content: space-around; /* Distribute space evenly */
  width: 100%;
  margin: 100px 0; /* Space between gauge and scores */
`;

const ScoreCard = styled.div`
  background-color: #f0f0f0; /* Light background for score cards */
  border-radius: 8px; /* Rounded corners */
  padding: 10px 15px; /* Padding inside score cards */
  text-align: center; /* Center text */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  flex: 1; /* Allow cards to grow evenly */
  margin: 0 8px; /* Space between cards */
  font-size: 16px;
`;

const ScoreTitle = styled.div`
  font-weight: bold; /* Bold title for emphasis */
  color: #333; /* Darker color for better readability */
`;

const ScoreValue = styled.div`
  font-size: 20px; /* Slightly larger font for values */
  color: #00c02d; /* Color for score values */
`;
