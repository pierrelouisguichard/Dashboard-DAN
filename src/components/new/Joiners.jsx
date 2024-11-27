import React from "react";
import Header from "./Header";
import Table from "./Table";
import styled from "styled-components";

function Joiners() {
  const headers = ["Name", "Date"];
  const rows = [
    ["Aarman Murgai", "10 Oct 2024"],
    ["Nicolas Goig", "01 Jul 2024"],
    ["Lucrezia Rossini", "15 Apr 2024"],
    ["Federico Colasanti", "28 Jun 2024"],
    ["Marine Gaudin", "28 Jun 2024"],
  ];

  return (
    <Container>
      <Header text={  <p>
    The Joiners component shows the most recent employees who have joined the organization, along with the date they joined.
  </p>} title={"Joiners"} />
      <YellowBox>
        <Table headers={headers} rows={rows} />
      </YellowBox>
    </Container>
  );
}

export default Joiners;

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
