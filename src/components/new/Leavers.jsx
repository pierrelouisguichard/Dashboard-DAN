import React from "react";
import Header from "./Header";
import Table from "./Table";
import styled from "styled-components";

function Leavers() {
  const headers = ["Name", "Date"];
  const rows = [
    ["Person 1", "01 Jan 2024"],
    ["Person 2", "01 Jan 2024"],
    ["Person 3", "01 Jan 2024"],
  ];

  return (
    <Container>
      <Header text={"text"} title={"Leavers"} />
      <YellowBox>
        <Table headers={headers} rows={rows} />
      </YellowBox>
    </Container>
  );
}

export default Leavers;

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
  justify-content: center;
  align-items: center;
`;
