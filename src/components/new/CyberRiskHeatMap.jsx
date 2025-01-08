import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Table from "./Table";
import map from "../../assets/heat_map.png";

function CyberRiskHeatMap() {
  const headers = ["Rank", "Risk Name"];
  const rows = [
    ["1", "Weak Passwords"],
    ["2", "Social Engineering"],
    ["3", "Phishing Attacks"],
    ["4", "Ransomware Attack"],
    ["5", "Privileged Access Misuse"],
  ];
  return (
    <Container>
      <Header text={"?"} title={"Cyber Risk Heat Map"} />

      <YellowBox>
        {" "}
        <Map src={map} alt="Map" />
        <Table headers={headers} rows={rows} />
      </YellowBox>
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

const Map = styled.img`
  width: 100%; /* Default logo size */
  padding-bottom: 10px;
  border-radius: 5px;
`;

const YellowBox = styled.div`
  padding: 10px 30px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
