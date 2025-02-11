import React from "react";
import Header from "../other/Header";
import Table from "../Box8/Table";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

function KeyDates() {
  const headers = ["Event", "Date"];
  const rows = [
    ["CSC Meeting", "11 Feb 2025"],
    ["Cyber Essentials Renewal", "17 Feb 2025"],
    ["Security Policy launch", "01 Mar 2025"],
    ["Acceptable Use Policy launch", "01 Mar 2024"],
    ["Security Awarness Plan", "22 Mar 2025"],
  ];

  return (
    <Container>
      <Header
        title={"Key Dates"}
        icon={<FontAwesomeIcon icon={faCalendarDays} />}
      />
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
