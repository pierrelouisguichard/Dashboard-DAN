import React from "react";
import Header from "./Header";
import styled from "styled-components";

function CyberRiskHeatMap() {
  return (
    <Container>
      <Header text={"text"} title={"Cyber Risk Heat Map"} />
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
  padding-left: 30px;
  padding-right: 30px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
