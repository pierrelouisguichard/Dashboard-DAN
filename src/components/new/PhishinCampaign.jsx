import React from "react";
import Header from "./Header";
import Table from "./Table";
import styled from "styled-components";

function PhishinCampaign() {
  const headers = ["Event", "Date"];
  const rows = [
    ["CSC Meeting #10", "01 Jan 2024"],
    ["CSC Meeting #11", "02 Jan 2024"],
    ["CSC Meeting #12", "03 Jan 2024"],
  ];

  return (
    <Container>
      <Header text={"Phishin Campaign"} />
      <YellowBox>
        <Title>Click Prone</Title>
        <BoxTwoThirds></BoxTwoThirds>
        <Title>Top Highest Risk Users</Title>
        <BoxOneThird>
          <Table headers={headers} rows={rows} />
        </BoxOneThird>
      </YellowBox>
    </Container>
  );
}

export default PhishinCampaign;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const YellowBox = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column; /* Stack the boxes vertically */
  justify-content: space-between; /* Optionally control spacing */
  align-items: stretch; /* Ensure boxes take full width */
`;

const BoxTwoThirds = styled.div`
  flex: 2; /* Takes 2/3 of the space vertically */
  background-color: lightblue; /* Just for visualization */
  height: 100%;
`;

const Title = styled.div`
  color: #186e98;
  flex: 0.2; /* Takes 1/3 of the space vertically */
  height: 100%;
`;

const BoxOneThird = styled.div`
  flex: 1; /* Takes 1/3 of the space vertically */
  height: 100%;
`;
