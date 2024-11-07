import React from "react";
import Header from "./Header";
import Table from "./Table";
import styled from "styled-components";

function KeyDates() {
  const headers = ["Event", "Date"];
  const rows = [
    ["CSC Meeting #10", "01 Jan 2024"],
    ["CSC Meeting #11", "02 Jan 2024"],
    ["CSC Meeting #12", "03 Jan 2024"],
  ];

  return (
    <Container>
      <Header text={"Key Dates"} />
      <YellowBox>
        <Table headers={headers} rows={rows} />
      </YellowBox>
    </Container>
  );
}

export default KeyDates;

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
