import React from "react";
import Item from "./Item";
import Title from "./Title";
import styled from "styled-components";
import Spider from "./Spider";

function Item6() {
  return (
    <Item colSpan={2} rowSpan={2} smallColSpan={1} smallRowSpan={4}>
      <Container>
        <Title text="Vulnerability Management" />
        <SubContainer>
          <SpiderContainer>
            <Spider />
          </SpiderContainer>
          <Insights>
            <InsightTitle>Insights:</InsightTitle>
            <InsightText>
              Overall performance indicates strengths and weaknesses in various
              areas of cybersecurity.
            </InsightText>
            <PerformanceIndicators>
              <Indicator>
                <IndicatorTitle>Malware Protection</IndicatorTitle>
                <IndicatorStatus status="good">Target Achieved</IndicatorStatus>
              </Indicator>
              <Indicator>
                <IndicatorTitle>Phishing Awareness</IndicatorTitle>
                <IndicatorStatus status="warning">
                  Needs Improvement
                </IndicatorStatus>
              </Indicator>
              <Indicator>
                <IndicatorTitle>Incident Response</IndicatorTitle>
                <IndicatorStatus status="warning">
                  Needs Attention
                </IndicatorStatus>
              </Indicator>
              <Indicator>
                <IndicatorTitle>Data Encryption</IndicatorTitle>
                <IndicatorStatus status="good">On Track</IndicatorStatus>
              </Indicator>
            </PerformanceIndicators>
          </Insights>
        </SubContainer>
      </Container>
    </Item>
  );
}

export default Item6;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
`;

const SpiderContainer = styled.div`
  border: 2px solid #e0e0e0; // Border around the spider chart
  border-radius: 8px;
  padding: 20px; // Increased padding for better spacing
  background-color: #f9f9f9; // Light background for contrast
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 65%; // Increased width for the spider chart
  height: 100%; // Increased height for the spider chart
`;

const Insights = styled.div`
  margin-left: 20px;
  text-align: left;
  width: 30%; // Adjusted width for better balance
  border: 2px solid #e0e0e0; // Border around the insights section
  border-radius: 8px;
  padding: 15px; // Padding inside the insights border
  background-color: #ffffff; // White background for insights
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const InsightTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const InsightText = styled.p`
  font-size: 15px;
  margin: 5px 0;
  color: #555;
`;

const PerformanceIndicators = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Indicator = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  margin-bottom: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const IndicatorTitle = styled.span`
  font-size: 15px;
  color: #333;
`;

const IndicatorStatus = styled.span`
  font-weight: bold;
  color: ${(props) =>
    props.status === "good" ? "#4CAF50" : "#FF9800"}; // Color coding for status
`;
