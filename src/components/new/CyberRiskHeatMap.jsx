import React from "react";
import Header from "./Header";
import styled from "styled-components";

function CyberRiskHeatMap() {
  return (
    <Container>
      <Header text={"Cyber Risk Heat Map"} />
      <YellowBox />
    </Container>
  );
}

export default CyberRiskHeatMap;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; /* Take full viewport height */
  width: 100%;
`;

const YellowBox = styled.div`
  /* background-color: yellow; */
  flex-grow: 1; /* Take remaining space */
  width: 100%;
`;
