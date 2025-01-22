import React from "react";
import Header from "../other/Header";
import Table from "../Box8/Table";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

function KeyDates() {
  const headers = ["Event", "Date"];
  const rows = [
    ["CSC Meeting", "09 Oct 2024"],
    ["Cyber Essentials Renewal", "17 Sep 2024"],
    ["Information Security Policy launch", "01 Nov 2024"],
    ["Acceptable Use Policy launch", "01 Dec 2024"],
    ["Security Awarness Plan", "01 Jan 2025"],
  ];

  return (
    <Container>
      <Header
        text={
          <p>
            The Key Dates component shows important dates relevant to the
            organization, such as renewal dates, deadlines, and other
            significant events.
          </p>
        }
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
