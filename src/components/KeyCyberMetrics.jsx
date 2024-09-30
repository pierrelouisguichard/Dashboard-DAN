import React from "react";
import styled from "styled-components";
import data from "../data/stats.json"; // Adjust the path as necessary

const metricsData = data["Key Cyber Metrics (Q1)"];

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 15px; /* Adjusted gap for smaller cards */
`;

const Card = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px; /* Reduced padding */
  width: calc(25% - 15px); /* Smaller card width, four cards per row */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h2`
  font-size: 22px; /* Reduced font size */
  margin: 0 0 5px; /* Adjusted margin */
`;

const Description = styled.p`
  margin: 0 0 5px; /* Adjusted margin */
  font-size: 0.9em; /* Slightly smaller font size */
`;

const Score = styled.p`
  font-weight: bold;
  color: #4caf50;
  font-size: 1em; /* Keep score font size */
`;

const KeyCyberMetrics = () => {
  return (
    <Container>
      {metricsData.map((metric) => (
        <Card key={metric.No}>
          <Title>{metric["Metric Description"]}</Title>
          <Score>Score: {metric.Score}</Score>
        </Card>
      ))}
    </Container>
  );
};

export default KeyCyberMetrics;
